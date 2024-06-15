import React from 'react';
import { Text, View, StyleSheet, Image, Button, Platform } from 'react-native';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import {firebase} from '../config/firebase';
import  { useEffect, useState } from "react";

export default function ShowCV({ route }) {
  const [imageuri,setImageuri] = useState();
  const [email,setEmail] = useState();

  useEffect(() => 
  {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        setImageuri(documentSnapshot.data().imageuri);
        setEmail(documentSnapshot.data().email);
        // setImageKey(imageKey + 1);
        
      }

      else{
        console.log('User does not exist');
      }

    })
  },[]);

  let dataObj = route.params;

  const handlePrintToFile = async () => {
    try {
      const htmlContent = generateHTMLContent(dataObj);
      const pdf = await Print.printToFileAsync({ html: htmlContent });

      if (Platform.OS === 'ios') {
        FileSystem.getContentUriAsync(pdf.uri).then((uri) => {
          Print.printAsync({ uri: uri.uri });
        });
      } else {
        Print.printAsync({ uri: pdf.uri });
      }
    } catch (error) {
      console.error('Error printing:', error);
    }
  };

  const generateHTMLContent = (data) => {
    return `
      <html>
        <head>
          <title>Your Resume</title>
          <style>
            ${stylesToString(styles)}
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Your Resume</h1>
            </div>
            <div class="details">
              <h2>Personal Details</h2>
              <img src= ${imageuri} alt=${imageuri} width="300" height="300">
              <p><strong>Name:</strong> ${data.fullName}</p>
              <p><strong>Professional Title:</strong> ${data.profTitle}</p>
              <p><strong>Professional Title:</strong> ${email}</p>
              <p><strong>Phone No:</strong> ${data.phoneNo}</p>
              <p><strong>University Name:</strong> ${data.universityName}</p>
              <p><strong>Previous Job Company Name:</strong> ${data.company}</p>
              <p><strong>Previous Job Company Job Title:</strong> ${data.jobTitle}</p>
              <p><strong>Previous Job Company Job Start Date:</strong> ${data.jobStartDate}</p>
              <p><strong>Previous Job Company Job End Date:</strong> ${data.jobEndDate}</p>
              <p><strong>Previous Job Company Experience:</strong> ${data.experience}</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };

  const stylesToString = (styles) => {
    let styleStr = '';
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        const styleObj = styles[key];
        styleStr += `${key}{`;
        for (const styleKey in styleObj) {
          if (styleObj.hasOwnProperty(styleKey)) {
            styleStr += `${styleKey}:${styleObj[styleKey]};`;
          }
        }
        styleStr += '}';
      }
    }
    return styleStr;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Resume</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.titleText}>Personal Details</Text>
        {/* <Image source={{ uri: dataObj.avatarUrl }} style={{ width: 80, height: 80 }} /> */}
        <Image source={{ uri: imageuri }} style={{ width: 80, height: 80 }} />

        <Text style={styles.text}>
          <Text style={styles.key}>Email: </Text>
          <Text>{email}</Text>
          
        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>Name: </Text>
          <Text>{dataObj.fullName}</Text>

        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>Phone No: </Text>
          <Text>{dataObj.phoneNo}</Text>
        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>University Name: </Text>
          <Text>{dataObj.universityName}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Professional Title: </Text>
          <Text>{dataObj.profTitle}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Previous Job Company Name: </Text>
          <Text>{dataObj.company}</Text>
        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>Previous Job Title: </Text>
          <Text>{dataObj.jobTitle}</Text>
        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>Job Starting Date: </Text>
          <Text>{dataObj.jobStartDate}</Text>
        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>Job Ending  Date: </Text>
          <Text>{dataObj.jobEndDate}</Text>
        </Text>


        <Text style={styles.text}>
          <Text style={styles.key}>Experience: </Text>
          <Text>{dataObj.experience}</Text>
        </Text>
      </View>

      <Button title="Print to File" onPress={handlePrintToFile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  details: {
    marginBottom: 15,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    borderBottomColor: '#199187',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 15,
    marginBottom: 10,
  },
  key: {
    fontWeight: 'bold',
  },
  text: {
    color: '#d3d3d3',
  },
});
