import {View, Text,Button} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
//import { COLORS } from '../constants/colors';


const Welcome = ({navigation}) => {

  const handle = () => {
    console.log('Button pressed');
  }
  return (
    <LinearGradient style = {{
      flex: 1,
  
    
    }}
    colors={['#1E90FF', '#FFA500']}
    >


    <View style={styles.container}>
   
    <View style={styles.circleview}>
    <View style={styles.circleimg}>
   <Image source={require('.././assets/1.png')} 
   style={{
    width: 200, height: 200, borderRadius: 200/2,
    
    }}/>
    </View>
    
    </View>

    
    </View>

    <View>
    <Button  color="#ff5c5c" title='Welcome' style = {{
      //marginBottom: 20,
      position: 'absolute',
  left: 100,
  top: 500,
      width: 50,
      
    }}
    onPress={() => navigation.navigate('Signup')}
    //onPress={() => navigation.navigate('Jobs2')}
    />



<Button  title='Explore Jobs' style = {{
      //marginBottom: 20,
      width: "50%",
    }}
    //onPress={() => navigation.navigate('Signup')}
    onPress={handle}
    />
    </View>
    </LinearGradient>
    
  )

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  circleview: {
    width: 250,
    height: 250,
    borderRadius: 250/2,
    backgroundColor: "#FFFFFF",
    position: 'absolute',
    // left: -120,
    // top: -20,
  },

  circleimg :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
 });

export default Welcome;