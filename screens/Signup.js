import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants1/Spacing";
import FontSize from "../constants1/FontSize";
import Colors from "../constants1/Colors";
import Font from "../constants1/Font";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppTextInput from "../components/AppTextInput";
import {useState} from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../config/firebase';
import ImageInput from "./ImageInput";
//import { db } from '../config/firebase';

const Signup = ({navigation}) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [imageuri,setImageuri] = useState();

  registerUser = async (email, password, name,imageuri) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://authentication-92f91.firebaseapp.com/',
      })
      .then(() => {
        alert('Verification email has been sent to your email');
      }).catch((error) => {
        alert(error.message);
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).set({
          name: name,
          email: email,
          password: password,
          imageuri: imageuri,
        
        })
      })
      .catch((error) => {
        alert(error.message);
      })
      
    })
    .catch((error => {
      alert(error.message);
    }))

  }
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: '20px',
          }}
        >

<TouchableOpacity //133
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
               
              }}
              onPress={() => navigation.navigate('Welcome')}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>


          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              //fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
             // fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
            backgroundColor: Colors.lightPrimary,
          }}
        >


          <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
       placeholder= "Firstname"
       //value={name}
       onChangeText={(name) => setName(name)}
       
    
     
      style={[
        {
          //fontFamily: Font["poppins-regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
          borderColor: 'black',
          borderWidth: 1,

        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
    
    /> 




<TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
       placeholder= "Email"
     
      //value={email}
      onChangeText={(email) => setEmail(email)}
      
      style={[
        {
          //fontFamily: Font["poppins-regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
          borderColor: 'black',
          borderWidth: 1,

        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
    
    />



<TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
       placeholder= "Password"
       //value={password}
       onChangeText={(password) => setPassword(password)}
      secureTextEntry={true}
      style={[
        {
          //fontFamily: Font["poppins-regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
          borderColor: 'black',
          borderWidth: 1,

        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
    
    />


    {/* <Image source={{uri: imageuri}} 
    style={{width: 200, height: 200}} /> */}

    <ImageInput  imageuri={imageuri} onChangeImage= {(uri) => setImageuri(uri) }/>
         
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
         // onPress={handleSubmit(name,email,password)}
           onPress={() => registerUser(email, password,name,imageuri)}
          
          //onPress={handleSubmit}

        >
          <Text
            style={{
             // fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => navigation.navigate('Login')}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
           
            
          
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;



