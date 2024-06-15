import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Button,
  Linking
} from "react-native";
import React from "react";
import Spacing from "../constants1/Spacing";
import FontSize from "../constants1/FontSize";
import Colors from "../constants1/Colors";
import Font from "../constants1/Font";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import {useState} from "react";
import { useEffect} from "react";
import * as MailComposer from "expo-mail-composer";
import * as Print from "expo-print";
import * as Permissions from 'expo-permissions';
import { useNavigation } from "@react-navigation/native";

const Applyforum = () => {
  const navigation = useNavigation();
  const [name,setName] = useState("");
  const [focused, setFocused] = useState(false);
  
  const [isAvailable, setIsAvailable] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  // const sendMail = async () => {
  //   const { uri } = await Print.printToFileAsync({
  //     html: "<h1>My pdf!</h1>"
  //   });


  //   // const { status } = await Permissions.askAsync(Permissions.READ_CONTACTS); 
  //   // if (status !== 'granted') {
  //   //   console.error('Contacts permission not granted');
  //   //   return;
  //   // }
  

  //   try {
  //     MailComposer.composeAsync({
  //       subject: subject,
  //       body: body,
  //       recipients: recipients,
  //       attachments: [uri] 
  //     });
  //   } catch(error) {
  //     console.log('Error sending email:', error); // Log the detailed error
  //   }
  // };


  const sendMail = () => {
     Linking.openURL(`mailto:${recipients.join(",")}?subject=${subject}&body=${body}`);
  }

  const addRecipient = () => {
    let newRecipients = [...recipients];
    newRecipients.push(email);

    setRecipients(newRecipients);
    setEmail(undefined);
  };

  const showRecipients = () => {
    if (recipients.length === 0) {
      return <Text>No recipients added</Text>;
    }

    return recipients.map((recipient, index) => {
      return <Text key={index}>{recipient}</Text>;
    });
  };



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
              onPress={() => navigation.navigate("Search Jobs")}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>


          
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
       placeholder= "Subject"
       value={subject}
       onChangeText= {setSubject}
       
    
     
      style={[
        {
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
       placeholder= "Message"
     
      value={body}
      onChangeText={setBody}
      
      style={[
        {
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
       value={email}
       onChangeText={setEmail}
      style={[
        {
          
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

    <Button title='Add Recepient'  onPress={addRecipient}/>
    {showRecipients()}
    

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
          onPress={() => sendMail()}
        >
          <Text
            style={{
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Send Email
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

export default Applyforum;



