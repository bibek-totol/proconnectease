import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button,Pressable } from "react-native";
import { Camera,CameraType } from "expo-camera/legacy";
import { Video } from "expo-av";
import {firebase} from "../config/firebase";
export default function VideoRecord() {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [rm, setRm] = useState(true);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    if(camera){
        const data = await camera.recordAsync({
          //VideoQuality:['2160p'],
          maxDuration:10
         // maxFileSize:200,
         // mute:false,
          //videoBitrate:5000000
        });

        setRecord(data.uri);
        console.log(data.uri);

     


        try {
          const currentUserId = firebase.auth().currentUser.uid;

          if (!currentUserId) {
            throw new Error('User not authenticated');
          }

          
          if(currentUserId) 
          {
             const useref = firebase.firestore().collection("users").doc(currentUserId);
             await useref.update({
                video: data.uri
              });

              console.log("Video saved to Firestore");
          }
          
          
          // const videosCollection = firebase.firestore().collection("videos");
  
          // await videosCollection.add({
          //   uri: data.uri,
          //   createdAt: firebase.firestore.FieldValue.serverTimestamp()
          // });
  
          // console.log("Video saved to Firestore");
        } catch (error) {
          console.error("Error saving video to Firestore: ", error);
        }
        
    }
  };


  



  const stopVideo = async () => {
    camera.stopRecording();
    setRm(true);
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"6:3"}
        />
      </View>

      { rm ?(<Video
        ref={video}
        style={styles.video}
        source={{
          uri: record,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />  ) : null }

      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>

<Pressable style={styles.button} 
   onPress={() => {
          setType(
            type === CameraType.back
              ? CameraType.front
              : CameraType.back
          );
        }}>
      <Text style={styles.text}>Flip Video</Text>
    </Pressable>

   <Pressable style={styles.button} onPress={() => takeVideo()}>
      <Text style={styles.text}>Take Video</Text>
    </Pressable>

    <Pressable style={styles.button} onPress={() => stopVideo()} >
      <Text style={styles.text}>Stop Video</Text>
    </Pressable>

    <Pressable style={styles.button} onPress={() => setRm(!rm)} >
      <Text style={styles.text}>Cross Video</Text>
    </Pressable>

    </View>
  );
}


const styles = StyleSheet.create({ 
    cameraContainer: {
        flex: 1,
        flexDirection: "row",
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
    video: {
        alignSelf: "center",
        width: 350,
        height: 220,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },


    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
 });

 
