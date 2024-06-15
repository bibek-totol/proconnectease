import * as React from "react";
import { Image,StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, ActivityIndicator,Button } from "react-native";
import { Card } from "@ui-kitten/components";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import { firebase } from '../config/firebase';
import { useEffect, useState } from "react";
import { Video, ResizeMode } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
const VideoProfile = () => {
   const [videos, setVideos] = useState(null);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isDownloading, setIsDownloading] = useState(false); 
  // const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {

    const fetchVideoURI = async () => {

      try{
        const snapshot = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get();
        if(snapshot.exists){
          const data = snapshot.data();
          setVideos(data.video);
        }
        else{
          console.log('User does not exist');
        }
      }

      catch (error) {
        console.error('Error fetching video URI:', error);
      } 
     };
     fetchVideoURI();

  }, []);



  // const downloadVideo = async () => {
  //   try {
  //     const snapshot = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get();
      
  //     if (snapshot.exists) {
  //       const userData = snapshot.data();
  //       const videoUri = userData.video; // Assuming 'video' is the field with the video URI
  
  //       if (videoUri) {
  //         const localUri = FileSystem.documentDirectory + 'downloaded_video.mp4'; // Local file path to save the video
  //         await FileSystem.copyAsync({ from: videoUri, to: localUri });
  //         console.log('Video downloaded to:', localUri);
  //       } else {
  //         console.log('No video URI found in the document.');
  //       }
  //     } else {
  //       console.log('Document does not exist.');
  //     }
  //   } catch (error) {
  //     console.error("Error downloading video:", error);
  //   }
  // };
  







  const downloadVideo = async () => {
    setIsDownloading(true); 
    try {
      const snapshot = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get();
      
      if (snapshot.exists) {
        const userData = snapshot.data();
        const videoUri = userData.video; // Assuming 'video' is the field with the video URI
    
        if (videoUri) {
          let localUri;
       
            // Local file path, use copyAsync
            localUri = FileSystem.cacheDirectory + 'downloaded_video.mp4';
            await FileSystem.copyAsync({ from: videoUri, to: localUri });
          
    
          // Log to check downloadRes and localUri
          
          console.log('Local URI:', localUri);
          console.log('Type of localUri:', typeof localUri); 
    
          // Save the downloaded video to the device's media library
          // const asset = await MediaLibrary.createAssetAsync(localUri);
          const assetSaveRes = await MediaLibrary.saveToLibraryAsync(localUri);
    
          // Log to check asset and saving result
          // console.log('Asset:', asset);
          console.log('Asset Save Result:', assetSaveRes);
    
          console.log('Video downloaded and saved to gallery.');
        } else {
          console.log('No video URI found in the document.');
        }
      } else {
        console.log('Document does not exist.');
      }
    } catch (error) {
      console.error("Error downloading video:", error);
    }finally {
      setIsDownloading(false); // Reset downloading state
    }
  };
  


  
  


  return (
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{
        // uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        uri: videos,
      }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    <View style={styles.buttons}>
      <Button
        title={status.isPlaying ? 'Pause' : 'Play'}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
      />


    </View>

    <Button 
      title={isDownloading ? 'Downloading...' : 'Download'} // Update title during download
      onPress={downloadVideo}
      disabled={isDownloading} // Disable button while downloading
    />    
  </View>

    
  );
};

export default VideoProfile;
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex:1,
    alignSelf: 'stretch',
  },
  buttons: {
    marginBottom: 40,
    marginTop: 15,
    
  },
});


