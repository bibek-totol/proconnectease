import React, { useState, useContext,useEffect } from 'react';
import { View, Text, Platform, StyleSheet, Alert, 
ActivityIndicator,Button,TextInput,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import * as firebase from 'firebase';
import {firebase} from "../config/firebase";
import {StatusWrapper,SubmitBtn,
SubmitBtnText,InputWrapper,InputField} from "../styles/AddPost";
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';

const Addpostscreen = ({route}) => {
    const { fetchPosts } = route.params;
//   const { user } = useContext(AuthContext);
const navigation = useNavigation();

const [currentUserName, setCurrentUserName] = useState('');
const [profileimageuri,profilesetImageuri] = useState();

useEffect(() => 
  {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        setCurrentUserName(documentSnapshot.data().name);
        profilesetImageuri(documentSnapshot.data().imageuri);
       
      }

      else{
        console.log('User does not exist');
      }

    })
  });





const currentUserId = firebase.auth().currentUser.uid;

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);


  const takePhotoFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImagePickerResult(result);
  };

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImagePickerResult(result);
  };




const handleImagePickerResult = async (result) => {
    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    }
  };
  

  const submitPost = async (fetchPostsCallback) => {
    // if (!image) {
    //   Alert.alert('Error', 'Please select an image for your post.');
    //   return;
    // }


    if (!post) {
        Alert.alert('Error', 'Please write text for your post.');
        return;
      }

    const imageUrl = await uploadImage();
    console.log('Image Url:', imageUrl);
    console.log('Post:', post);
    

    firebase.firestore().collection('posts').add({
     profileimg: profileimageuri,
     userName: currentUserName,
      userId: currentUserId,
      post: post,
      postImg: imageUrl,
      postTime: firebase.firestore.FieldValue.serverTimestamp(),
      likes: 0,
      comments: 0,
      likedBy:[],
    })
    .then(() => {
        console.log('Post added!');
        Alert.alert(
            'Post published!',
            'Your post has been published Successfully!',
          );
        setPost(null);
        fetchPosts();
    })
    .catch((error) => {
        console.log('Something went wrong with added post to firestore.', error);
    });

    setImage(null);
    
 
  };




  const uploadImage = async () => {

    if( image == null ) {
      return null;
    }
   
    try{
        const {uri} = await FileSystem.getInfoAsync(image);
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(xhr.response);
          };
          xhr.onerror = function(e) {
            console.log(e);
            reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          xhr.send(null);
        });

        setUploading(true);
        const filename = image.substring(image.lastIndexOf('/') + 1);
        const storageRef  = firebase.storage().ref(`photos/${filename}`);
        const task = storageRef.put(blob);


        return new Promise((resolve, reject) => {
            task.on(
              'state_changed',
              (taskSnapshot) => {
                const progress =
                  (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
                console.log(`Upload is ${progress.toFixed(0)}% done`);
                setTransferred(progress.toFixed(0));
                // You can update the UI with the upload progress if needed
              },
              (error) => {
                console.log('Error uploading image:', error);
                reject(error); // Reject the promise if upload fails
              },
              async () => {
                // If upload is successful, get the download URL
                const downloadURL = await storageRef.getDownloadURL();
                console.log('Image uploaded successfully. Download URL:', downloadURL);

                setUploading(false);
                 setImage(null);
                resolve(downloadURL); // Resolve the promise with the download URL
              }
            );
          });




    } catch (error) {
        console.log('Error:', error);
    }

  };










  return (
   
<View style={styles.container}>
      <Text>Select Image:</Text>


      <View style={styles.buttonContainer}>



      <View style={styles.button3}>
      <Button title="Go to previous screen"  onPress={() => navigation.navigate("JobPost")} />
      </View>

      <View style={styles.button1}>
      <Button title="Take Photo" onPress={takePhotoFromCamera}  />
      </View>

      <View style={styles.button2}> 
      <Button title="Choose Photo" onPress={choosePhotoFromLibrary} />
      </View>
         
     </View>

     <InputWrapper>
     {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      
      
      
      <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        />

      
      {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}

     </InputWrapper>
      


    </View>

    
  );
};

export default Addpostscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    height: 100,
  },
  progress: {
    alignItems: 'center',
    marginTop: 20,
  },

  buttonContainer: {
    marginTop: 30, 
  },


    button1: {
        marginBottom: 20,
        
    },


    button3:{
        marginBottom: 20,
    },
});
