

import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  Button,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Share

} from 'react-native';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import {Ionicons}  from "react-native-vector-icons";



import {
    Card,
    Container,
    Divider,
    Interaction,
    InteractionText,
    InteractionWrapper,
    PostText,
    UserImg,
    UserInfo,
    UserInfoText,
    UserName,
      PostTime,
      PostImg,
  
  } from "../styles/FeedStyles";
import {firebase} from "../config/firebase";

import moment from 'moment';

// import * as Sharing from 'expo-sharing';
// import * as FileSystem from 'expo-file-system';



const JobPost = () => {


  const navigation = useNavigation();
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const currentUserId = firebase.auth().currentUser.uid;
  




  const renderPostItem = ({ item}) => {
    let likeIcon = item.liked ? 'heart' : 'heart-outline';
    let likeIconColor = item.liked ? 'red' : 'black';
    let likeText = item.likes > 0 ? `${item.likes} Likes` : 'Like';
    // let commentText = item.comments > 0 ? `${item.comments} Comments` : 'Comment';

    // if (item.likes == 1) {
    //   likeText = '1 Like';
    // } else if (item.likes > 1) {
    //   likeText = item.likes + ' Likes';
    // } else {
    //   likeText = 'Like';
    // }

    // if (item.comments == 1) {
    //   commentText = '1 Comment';
    // } else if (item.comments > 1) {
    //   commentText = item.comments + ' Comments';
    // } else {
    //   commentText = 'Comment';
    // }



  
    
    const url = item.postImg;
    const handleShare = async () => {
      try {
        const result = await Share.share({
          message:
            ('Check out the post'+ '\n'+ url )
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
   

   
    


    return (
    

      <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image source={{ uri: item.userImg }} style={styles.userImg} />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.postTime}>{moment(item.postTime.toDate()).fromNow()}</Text>
        </View>
      </View>
      <Text style={styles.postText}>{item.post}</Text>
      {item.postImg !== null ? <Image source={{ uri: item.postImg }} style={styles.postImg} /> : <View style={styles.divider} />}
      <View style={styles.divider} />
      <View style={styles.interactionWrapper}>
        <TouchableOpacity style={[styles.interaction, item.liked && styles.activeInteraction]}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} 
             onPress={() => handleLike(item.id, item.likes,item.likedBy)}
          />
          <Text style={[styles.interactionText, item.liked && styles.activeInteractionText]}>{likeText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interaction}
         onPress={handleShare}

        // onPress={() => handleShare('https://bauet.ac.bd/', 'Check out this post!')}
         
        >
          <Ionicons name="share-social-outline" size={25} color="red" />
          <Text style={styles.interactionText}>Share</Text>
        </TouchableOpacity>
        
      </View>
    </View>



    );
  };


  const handleLike = async (postId, currentLikes,likedBy) => {
    try {
      let newLikes;
      let newLikedBy;

      if (likedBy.includes(currentUserId)) {
        // Unlike the post
        newLikes = currentLikes - 1;
        newLikedBy = likedBy.filter(userId => userId !== currentUserId);
        // ToastAndroid.show('Like removed', ToastAndroid.SHORT);
      } else {
        // Like the post
        newLikes = currentLikes + 1;
        newLikedBy = [...likedBy, currentUserId];
        // ToastAndroid.show('Liked', ToastAndroid.SHORT);
      }

      await firebase.firestore()
        .collection('posts')
        .doc(postId)
        .update({
          likes: newLikes,
          likedBy: newLikedBy,
        });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, likes: newLikes, liked: !post.liked, likedBy: newLikedBy } : post
        )
      );
    } catch (error) {
      console.error('Error liking post: ', error);
    }
  };





  const fetchPosts = async () => {
    setLoading(true);
    try {
      const list = [];

      await firebase.firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapshot) => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const {
              userName,
              userId,
              post,
              postImg,
              postTime,
              likes,
              comments,
              profileimg,
              likedBy,

            } = doc.data();

            console.log("Poster Boy: ",postImg)



            list.push({
              id: doc.id,
              userId,
              userName: userName,
              userImg:profileimg,
              postTime: postTime,
              post,
              // postImg:'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
              postImg:postImg,
              liked: false,
              likes,
              comments,
              likedBy,
            });
          });
        });

      
      setPosts(list);
      setLoading(false);

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
    setDeleted(false);
  }, [deleted]);







  
  return (
  

        <SafeAreaView style={{flex: 1}}>
       
       
       {
          loading ? (
           <ActivityIndicator size="large" color="blue" />
            ):(
<Container>
       <Button
       title="Post a Job"
        //  onPress={() => navigation.navigate('Addpostscreen')}

         onPress={() => {
                    navigation.navigate('Addpostscreen', {
                      fetchPosts, // Pass the function as a prop
                        
                    });
                }}
      />
        <FlatList

           data={posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
         />
       </Container>

            )}
      </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e2ddd9',
    width: 350,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    height: 500,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfoText: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  postText: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  postImg: {
    width: '100%',
    height: 250,
  },
  divider: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    width: '92%',
    alignSelf: 'center',
    marginTop: 15,
  },
  interactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 2,
    backgroundColor: 'transparent',
  },
  interactionText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 5,
  },
  activeInteraction: {
    backgroundColor: '#2e64e515',
  },
  activeInteractionText: {
    color: '#2e64e5',
  },
});

export default JobPost;
  