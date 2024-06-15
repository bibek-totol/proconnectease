import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  
} from "react-native";
import React,{useState} from "react";
import { AntDesign } from '@expo/vector-icons';
import Spacing from "../constants1/Spacing";
import FontSize from "../constants1/FontSize";
import Colors from "../constants1/Colors";
//import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppTextInput from "../components/AppTextInput";

import { ActivityIndicator } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {firebase} from '../config/firebase';
import { useNavigation } from "@react-navigation/native";





const Login = ({navigation}) =>  {
  
  //const navigation = useNavigation();
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  loginUser = async (email,password) => {
     try{
        setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email,password);
     } catch(err){
       alert(err.message);
     }finally {
      setLoading(false);
  }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              //fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>

          
<TouchableOpacity //133
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
               
              }}
              onPress={() => navigation.navigate('Signup')}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          <Text
            style={{
              //fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          {/* <AppTextInput placeholder="Email" onClick1={handleChangeemail} />
          <AppTextInput placeholder="Password" onClick1={handleChangeepass} /> */}
          <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
       placeholder= "Email"
       
      onChangeText={(email) => setEmail(email)}
       //onChangeText={(text) => setEmail(text)}
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
       value={password}
      onChangeText={(password) => setPassword(password)}
      //onChangeText={(text) => setPassword(text)}
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



        </View>

        {
          loading ? (
           <ActivityIndicator size="large" color="blue" />
            ):(
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

          onPress={() => loginUser(email,password)}
        >
          <Text
            style={{
             // fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
            )}




    
        <TouchableOpacity
          //onPress={() => navigate("Register")}
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
            Create new account
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


export default Login;

