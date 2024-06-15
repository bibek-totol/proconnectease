import React, { useEffect } from 'react';
 
import { View, Text, StyleSheet,TouchableWithoutFeedback, Alert,Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  * as ImagePicker from 'expo-image-picker';
//import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ImageInput({imageuri,onChangeImage}) {

     useEffect(() => {
            requestpermission();
     }, [])


    const requestpermission = async () => { 
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted) alert('You need to enable permission to access the library');
    }
   const  handlepress = () => {
   if(!imageuri) {
       selectImage();

   }

    else{
         Alert.alert('Delete', 'Are you sure you want to delete this image?'[
                {text: 'Yes', onPress: () => onChangeImage(null)},
                {text: 'No'}
         ] )
    }
   }


   const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      
  
    if (!result.canceled) {
      onChangeImage(result.assets[0].uri); // Use result.assets[0].uri instead of result.uri
    }
    } catch (error) {
      console.log("Error reading an image", error);
    }
   }
  return (
    <TouchableWithoutFeedback  onPress={handlepress}>
    <View style = {styles.container}>
        {!imageuri && <MaterialCommunityIcons color = 'darkgrey' name = 'camera' size = {40} />}

        {imageuri && <Image source = {{uri: imageuri}} style = {styles.image}/>}
    </View>
    </TouchableWithoutFeedback>
    
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(104,104,104)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        height: 100,
        width: 100,
    },
   
    image : 
    {
        width: '100%',
        height: '100%',
    }

    })
