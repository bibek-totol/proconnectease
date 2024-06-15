
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from "react";
 import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Alert,ScrollView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border } from "../GlobalStyles1";
import * as Location from 'expo-location';
import * as IntentLauncher from 'expo-intent-launcher';
import { useNavigation } from "@react-navigation/native";
// import { Image } from 'react-native-expo-image-cache';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  const handlePress = async () => {
    // Check if location services are enabled
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Location permission not granted', 'Please enable location services to find nearby hospitals.');
      return;
    }

    // Get current location
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // Form Google Maps URL with current location
    const mapsUrl = `https://www.google.com/maps/search/software+firms+companies/@${latitude},${longitude},15z`;

    // Open Google Maps or fallback to browser
    try {
      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: mapsUrl,
      });
    } catch (error) {
      console.error('Error opening Google Maps:', error);
      Alert.alert('Error', 'Failed to open Google Maps. Please try again later.');
    }
  };

  return (
    <ScrollView >
    <View style={styles.onboarding}>
      <View style={styles.frameParent}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/frame-27.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/frame-28.png")}
        />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/frame-32.png")}
        />
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame-31.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/frame-33.png")}
        />
        <Image
          style={styles.groupChild2}
          contentFit="cover"
          source={require("../assets/frame-24.png")}
        />
        <Image
          style={styles.groupChild3}
          contentFit="cover"
          source={require("../assets/frame-321.png")}
        />
        <Image
          style={styles.groupChild4}
          contentFit="cover"
          source={require("../assets/frame-34.png")}
        />
        <Image
          style={styles.groupChild5}
          contentFit="cover"
          source={require("../assets/frame-26.png")}
        />
        <Image
          style={styles.groupChild6}
          contentFit="cover"
          source={require("../assets/frame-311.png")}
        />
        <Image
          style={[styles.groupChild7, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/frame-29.png")}
        />
        <Image
          style={[styles.groupChild8, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/frame-331.png")}
        />
        <Image
          style={styles.groupChild9}
          contentFit="cover"
          source={require("../assets/frame-312.png")}
        />
        <Image
          style={styles.groupChild10}
          contentFit="cover"
          source={require("../assets/frame-30.png")}
        />
        <Image
          style={[styles.groupChild11, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame-322.png")}
        />
        <Image
          style={styles.groupChild12}
          contentFit="cover"
          source={require("../assets/frame-25.png")}
        />
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0, 1]}
          colors={["rgba(31, 31, 31, 0)", "#1f1f1f"]}
        />
      </View>
      <View style={styles.yourSearchForTheNextDreamParent}>
        <Text
          style={[styles.yourSearchForContainer, styles.startSearchingTypo]}
        >
          <Text
            style={styles.yourSearchFor}
          >{`Your search for the next dream job is over `}</Text>
          <Text style={styles.text}>🚀</Text>
        </Text>
        <Pressable onPress={handlePress}>
        <View style={[styles.startSearchingParent, styles.frameChildFlexBox]}>
          <Text style={[styles.startSearching, styles.startSearchingTypo]}>
            Nearby Software Companies
          </Text>

          {/* <Button
      title="Nearby Hospital"
      onPress={handlePress}
    /> */}
          <Image
            style={styles.arrowRightIcon}
            contentFit="cover"
            source={require("../assets/arrowright.png")}
          />
        </View>

        </Pressable>


      <Pressable  onPress={() => navigation.navigate("Chatbot")}>
        <View style={styles.imageContainer}>

        <Image style={styles.image} source= {require("../assets/download32.jpeg")} />
        
      </View>
      </Pressable>


        <View style={[styles.frameChild, styles.frameChildFlexBox]} />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({


  imageContainer: {
    marginLeft: 170,
    marginTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 5,
  },



  groupChildPosition: {
    left: 7,
    position: "absolute",
  },
  groupLayout: {
    height: 76,
    borderRadius: 39,
    position: "absolute",
  },
  frameIconLayout: {
    width: 173,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  startSearchingTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    //
    //fontFamily: FontFamily.satoshi,
    fontWeight: "700",
  },
  frameChildFlexBox: {
    justifyContent: "center",
    width: 340,
    borderRadius: Border.br_13xl,
    alignItems: "center",
  },
  groupChild: {
    top: 379,
    borderRadius: 47,
    width: 185,
    height: 92,
  },
  groupItem: {
    top: 396,
    left: 196,
    width: 175,
  },
  groupInner: {
    top: 316,
    left: 371,
    width: 135,
    height: 165,
    borderRadius: 39,
    position: "absolute",
  },
  frameIcon: {
    top: 267,
    left: 230,
    height: 147,
    borderRadius: 39,
  },
  groupChild1: {
    top: 298,
    width: 248,
    height: 90,
    borderRadius: 39,
  },
  groupChild2: {
    top: 212,
    left: 38,
    borderRadius: 44,
    width: 189,
    height: 86,
    position: "absolute",
  },
  groupChild3: {
    top: 205,
    left: 227,
    width: 169,
    height: 87,
    borderRadius: 39,
    position: "absolute",
  },
  groupChild4: {
    top: 231,
    left: 369,
    borderRadius: 33,
    width: 116,
    height: 121,
    position: "absolute",
  },
  groupChild5: {
    top: 174,
    left: 320,
    borderRadius: 26,
    width: 138,
    height: 61,
    position: "absolute",
  },
  groupChild6: {
    top: 149,
    left: 171,
    borderRadius: 32,
    width: 145,
    height: 57,
    position: "absolute",
  },
  groupChild7: {
    top: 116,
    borderRadius: 43,
    width: 171,
    height: 117,
  },
  groupChild8: {
    top: 75,
    left: 169,
    width: 239,
  },
  groupChild9: {
    top: 34,
    left: 404,
    width: 76,
    height: 148,
    borderRadius: 39,
    position: "absolute",
  },
  groupChild10: {
    top: 6,
    left: 266,
    width: 148,
    height: 78,
    borderRadius: 39,
    position: "absolute",
  },
  groupChild11: {
    top: 0,
    left: 91,
    borderRadius: 41,
    height: 82,
  },
  groupChild12: {
    top: 78,
    left: 33,
    width: 117,
    height: 62,
    position: "absolute",
    borderRadius: 24,
  },
  rectangleLineargradient: {
    top: 246,
    left: 51,
    width: 430,
    height: 243,
    backgroundColor: "transparent",
    position: "absolute",
  },
  frameParent: {
    top: 466,
    left: -51,
    width: 506,
    height: 489,
    position: "absolute",
  },
  yourSearchFor: {
    display: "flex",
    fontSize: 30,
    marginLeft: 16,
  },
  text: {
    fontSize: 32,
  },
  yourSearchForContainer: {
    alignSelf: "stretch",
    zIndex: 0,
  },
  startSearching: {
    fontSize: 16,
  },
  arrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  startSearchingParent: {
    backgroundColor: "#5424fd",
    flexDirection: "row",
    padding: 16,
    zIndex: 1,
    marginTop: 40,
  },
  frameChild: {
    top: 235,
    backgroundColor: "rgba(84, 36, 253, 0.6)",
    zIndex: 2,
    left: 0,
    position: "absolute",
  },
  yourSearchForTheNextDreamParent: {
    top: 79,
    left: 45,
    alignItems: "center",
    position: "absolute",
  },
  onboarding: {
    backgroundColor: "#1f1f1f",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    borderRadius: 0,
  },
});

export default HomeScreen;
