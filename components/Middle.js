import { StyleSheet, Text, View, Image,Button, ActivityIndicator,SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors1 from "../constants/colors1";
import {firebase} from '../config/firebase';


export default function Middle() {
 const [name, setName] = useState("");
 const [imageuri,setImageuri] = useState();
 const [imageKey, setImageKey] = useState(0);
 const [loading, setLoading] = useState(false);
 
  useEffect(() => 
  {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        setName(documentSnapshot.data().name);
        setImageuri(documentSnapshot.data().imageuri);
        setImageKey(imageKey + 1);
        
      }

      else{
        console.log('User does not exist');
      }

    })
  },[]);



   const handleLogout = async () => {
    try {
      setLoading(true); // Set loading to true when logout operation starts
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false); // Set loading to false when logout operation finishes
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source= {{uri:  imageuri}}   key={imageKey}/>
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          {name}
        </Text>
        <Text
          style={{ fontSize: 16, color: Colors1.darkGray, fontWeight: "500" }}
        >
          {/* {auth.currentUser?.email} */}
          {firebase.auth().currentUser?.email}
        </Text>
      </View>
       


      {loading ? ( // Render loading indicator while logout operation is in progress
        <ActivityIndicator size="large" color="blue" />
      ) : (
      <View style={styles.middleSectionTextContainer}>
      <Button title="Logout"  color={'red'}
        onPress = {handleLogout}
      />

  </View>
      )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 5,
  },
  middleSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  middleSectionText: {
    justifyContent: "center",
    alignItems: "center",
  },
  toptext: {
    fontSize: 16,
    color:  Colors1.white,
    fontWeight: "bold",
  },
  bottomtext: {
    fontSize: 16,
    color: Colors1.darkGray,
    fontWeight: "700",
  },

});