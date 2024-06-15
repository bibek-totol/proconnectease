// npx expo start
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Welcome, Signup,Jobs2,Job_des,
  VideoProfile,Job_explore,Job_record,HomeScreen,
Profile,VideoRecord,Jobs3,Applyforum,ResumeForm,
ShowCV,JobPost,Addpostscreen,Chatbot} from './screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import useAuth from './hooks/useAuth';
import {firebase} from './config/firebase';
import { useEffect, useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //const {user} = useAuth();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  },[]);

  if (initializing) return null;
  if(user)
  {
    return (
    
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Drawer.Screen name="Jobs2" component={Jobs2} /> */}
        
        <Drawer.Screen name="Search Jobs" component={Jobs3} />
        <Drawer.Screen name="VideoProfile" component={VideoProfile} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="VideoRecord" component={VideoRecord} />
        <Drawer.Screen name="ResumeForm" component={ResumeForm} />
        <Drawer.Screen name="JobPost" component={JobPost} />


        <Drawer.Screen name="ShowCV" component={ShowCV} 
           options={{
            drawerLabel: () => null, // Hide the label
            drawerStyle: { display: 'none' }, // Hide the item in the drawer
          }}
        />

        


        <Drawer.Screen name="Applyforum" component={Applyforum} 
          options={{
            drawerLabel: () => null, // Hide the label
            drawerStyle: { display: 'none' }, // Hide the item in the drawer
          }}
        />


            <Drawer.Screen name="Job_des" component={Job_des}
             options={{
            drawerLabel: () => null, // Hide the label
            drawerStyle: { display: 'none' }, // Hide the item in the drawer
          }}
             />



<Drawer.Screen name="Addpostscreen" component={Addpostscreen}
             options={{
            drawerLabel: () => null, // Hide the label
            drawerStyle: { display: 'none' }, // Hide the item in the drawer
          }}
             />





<Drawer.Screen name="Chatbot" component={Chatbot}
             options={{
            drawerLabel: () => null, // Hide the label
            drawerStyle: { display: 'none' }, // Hide the item in the drawer
          }}
             />


        {/* <Drawer.Screen name="Logout" component={Logout} /> */}
      </Drawer.Navigator>

      

    </NavigationContainer>


      
    );
  } 

  else{
    return (
    
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName = "Welcome">
  
          <Stack.Screen name = "Welcome" component = {Welcome} options = {{headerShown: false}}/>
          <Stack.Screen name = "Login" component = {Login} options = {{headerShown: false}}/>
          <Stack.Screen name = "Signup" component = {Signup} options = {{headerShown: false}}/>
          
          {/* <Stack.Screen name = "Job_record" component = {Job_record} options = {{headerShown: false}}/> */}
          
  
        </Stack.Navigator>
      </NavigationContainer>
  
      
    );
  }
 
}


