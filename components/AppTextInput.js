import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
//import {Signup} from '../screens';
import React, { useState } from "react";
import Colors from "../constants1/Colors";
import Font from "../constants1/Font";
import FontSize from "../constants1/FontSize";
import Spacing from "../constants1/Spacing";

const AppTextInput = (props) =>{
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
       placeholder= {props.placeholder}
      onChange={props.onClick1}
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
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
