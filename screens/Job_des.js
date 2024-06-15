import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text, Alert,FlatList,ScrollView,Button } from "react-native";
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, Border } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import * as Location from 'expo-location';
import * as IntentLauncher from 'expo-intent-launcher';
import { Linking } from 'react-native';

const Job_des = () => {

  const navigation = useNavigation();
  const route = useRoute();
  try {
    const {
      job_name,
      company,
      salary,
      image,
      applybefore,
      jobtype,
      posted_on,
      job_description,
      job_qualityscore,
      job_applylink,
      longitiude,
      latitude,
      website,
    } = route.params;


const handleUrl = async () => {

  const url = await website;
  Linking.openURL(url);
}

    const handlePress = async () => {
      // Check if location services are enabled
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location permission not granted', 'Please enable location services to find nearby hospitals.');
        return;
      }
  
      // // Get current location
      // let location = await Location.getCurrentPositionAsync({});
      // const { latitude, longitude } = location.coords;
  
      // Form Google Maps URL with current location
      console.log(latitude);
      console.log(longitiude);
      const mapsUrl =  `https://www.google.com/maps?q=${latitude},${longitiude}`;
  
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

     
      <View style={styles.screen}>
      
        <View style={[styles.frameParent, styles.parentPosition1]}>
        <ScrollView style ={{
          backgroundColor: Color.primaryWHITE,
          maxHeight: 5000,
        
        }}>
          <View style={styles.frameGroup}>
            <View style={[styles.arrowBack24pxParent, styles.parentFlexBox]}>
              <Pressable
                style={[styles.arrowBack24px, styles.arrowBack24pxLayout]}
                onPress={() => navigation.navigate("Jobs3")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrow_back_24px.png")}
                />
              </Pressable>
              {/* <Image
                style={[
                  styles.favoriteBorder24pxIcon,
                  styles.arrowBack24pxLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/favorite_border_24px.png")}
              /> */}


              <Pressable   onPress={() => navigation.navigate("Applyforum")}>
               
              <View style={styles.applyNowWrapper}>
                <Text style={[styles.applyNow, styles.applyTypo]}>
                  APPLY NOW
                </Text>
              </View>
              </Pressable>
            
           


            </View>
            <View style={styles.image3Parent}>
            <Pressable onPress= {handleUrl}>
            <Image
                style={styles.image3Icon}
                resizeMode="cover"
                source={{ uri: image }}
              />
          
            </Pressable>
              
              <View style={styles.midLevelUxDesignerParent}>
                <Text style={[styles.midLevelUxDesigner, styles.toptalFlexBox]}>
                  {job_name}
                </Text>
                <Text style={[styles.toptal, styles.toptalTypo]}>
                  {company}
                </Text>
                <Text style={[styles.postedOn20, styles.july2021Typo]}>
                  Posted on {posted_on}
                </Text>

                <Text>
                  Job Quality Score: {job_qualityscore}
                </Text>

                <Text>
                  Job Apply Link: {job_applylink}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
            <View style={styles.frameContainer}>
              <View style={[styles.applyBeforeParent, styles.parentPosition1]}>
                <Text style={[styles.applyBefore, styles.applyTypo]}>
                  Apply Before
                </Text>
                <Text style={[styles.july2021, styles.july2021Typo]}>
                  {applybefore}
                </Text>
              </View>
              <View style={[styles.jobNatureParent, styles.parentPosition1]}>
                <Text style={[styles.applyBefore, styles.applyTypo]}>
                  Job Nature
                </Text>
                <View style={styles.frameView}>
                  <View style={styles.fullTimeWrapper}>
                    <Text style={[styles.fullTime, styles.fullTimeLayout]}>
                      Concenture
                    </Text>
                  </View>
                  <View style={styles.frameChild} />
                </View>
              </View>
              <View style={[styles.salaryRangeParent, styles.parentPosition]}>
                <Text style={[styles.applyBefore, styles.applyTypo]}>
                  Job City
                </Text>
                <Text style={[styles.july2021, styles.july2021Typo]}>
                  {salary}
                </Text>
              </View>
              <View style={[styles.jobLocationParent, styles.parentPosition]}>
                <Text style={[styles.applyBefore, styles.applyTypo]}>
                  Job Type
                </Text>
                <Text style={[styles.july2021, styles.july2021Typo]}>
                  {jobtype}
                </Text>
              </View>
              
            </View>
            
          </View>


          <View style={[styles.frameWrapper1, styles.frameWrapperSpaceBlock]}>
            <View style={styles.frameParent1}>
              <LinearGradient
                style={styles.jobDescriptionParent}
                locations={[0, 1]}
                colors={["#fff", "rgba(255, 255, 255, 0)"]}
                useAngle={true}
                angle={180}
              >
                <Text style={[styles.applyBefore, styles.applyTypo]}>
                Job Description
              </Text>
              <Text style={[styles.canYouBring, styles.july2021Typo]}>
                {job_description}
              </Text>

              </LinearGradient>
            
            </View>
          </View>

          </ScrollView>
          {/* <View style={[styles.frameWrapper2, styles.frameWrapperSpaceBlock]}>
            <View>
              
              <View style={styles.applyNowWrapper}>
                <Text style={[styles.applyNow, styles.applyTypo]}>
                  APPLY NOW
                </Text>
              </View>
            </View>
          </View> */}
        </View>
      </View>
     
    );
  } catch (e) {
    console.log(e);
    return Alert.alert(
      "No item selected to display",
      "Choose options",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("Jobs3") },
      ],
      { cancelable: false }
    );
  }
};

const styles = StyleSheet.create({
  parentPosition1: {
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrowBack24pxLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  toptalFlexBox: {
    textAlign: "left",
    color: Color.textColor,
  },
  toptalTypo: {
    opacity: 0.8,
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  july2021Typo: {
    //fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  frameWrapperSpaceBlock: {
    padding: Padding.p_5xl,
    marginTop: 10,
    backgroundColor: Color.primaryWHITE,
  },
  applyTypo: {
    //fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    textAlign: "left",
  },
  fullTimeLayout: {
    lineHeight: 13,
    fontSize: FontSize.aPPLabel12M_size,
    color: Color.textColor,
  },
  parentPosition: {
    top: 61,
    position: "absolute",
  },
  seeTypo: {
    color: Color.primary,
    // fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowBack24px: {
    left: -6,
    top: 27,
    zIndex: 0,
  },
  favoriteBorder24pxIcon: {
    top: 3,
    left: 339,
    zIndex: 1,
  },
  arrowBack24pxParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  image3Icon: {
    borderRadius: Border.br_9xs,
    width: 64,
    height: 64,
  },
  midLevelUxDesigner: {
    fontSize: FontSize.size_7xl,
    lineHeight: 31,
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  toptal: {
    marginTop: 6,
    lineHeight: 15,
    fontSize: FontSize.aPP14Medium_size,
    textAlign: "left",
    color: Color.textColor,
  },
  postedOn20: {
    opacity: 0.6,
    lineHeight: 13,
    fontSize: FontSize.aPPLabel12M_size,
    color: Color.textColor,
    marginTop: 6,
  },
  midLevelUxDesignerParent: {
    marginTop: 16,
  },
  image3Parent: {
    marginTop: 24,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_xl,
    width: 411,
    backgroundColor: Color.primaryWHITE,
  },
  applyBefore: {
    fontSize: FontSize.size_xs_5,
    lineHeight: 12,
    textTransform: "uppercase",
    opacity: 0.75,
    color: Color.textColor,
  },
  july2021: {
    marginTop: 10,
    lineHeight: 15,
    fontSize: FontSize.aPP14Medium_size,
    color: Color.textColor,
  },
  applyBeforeParent: {
    left: 0,
  },
  fullTime: {
    textAlign: "right",
    opacity: 0.8,
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  fullTimeWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_6xl,
    flexDirection: "row",
    backgroundColor: Color.bG,
  },
  frameChild: {
    backgroundColor: Color.colorGhostwhite_100,
    display: "none",
    marginLeft: 8,
    borderRadius: Border.br_6xl,
  },
  frameView: {
    marginTop: 8,
    flexDirection: "row",
  },
  jobNatureParent: {
    left: 188,
  },
  salaryRangeParent: {
    left: 0,
  },
  jobLocationParent: {
    left: 188,
  },
  frameContainer: {
    width: 334,
    height: 98,
  },
  frameWrapper: {
    marginTop: 10,
    width: 411,
  },
  canYouBring: {
    lineHeight: 20,
    color: Color.primaryBLACK,
    width: 363,
    marginTop: 12,
    fontSize: FontSize.aPP14Medium_size,
  },
  jobDescriptionParent: {
    backgroundColor: "transparent",
  },
  seeMore: {
    fontSize: FontSize.size_smi,
  },
  arrowDropDown24px: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  seeMoreParent: {
    marginTop: 16,
  },
  frameParent1: {
    backgroundColor: Color.primaryWHITE,
  },
  frameWrapper1: {
    marginTop: 10,
  },
  seeMore1: {
    fontSize: FontSize.aPPLabel12M_size,
    color: Color.primary,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  applyNow: {
    marginLeft: -45,
    top: 18,
    left: "50%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    color: Color.primaryWHITE,
    width: 97,
    height: 15,
    lineHeight: 15,
    position: "absolute",
    fontWeight: "700",
    letterSpacing: 1,
  },
  applyNowWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
    shadowColor: "rgba(28, 88, 242, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    width: 250,
    height: 52,
    marginTop: 16,
    marginLeft: 90,
  },
  frameWrapper2: {
    height: 175,
    marginTop: 10,
  },
  frameParent: {
    width: 430,
    left: 0,
    height: 943,
  },
  screen: {
    flex: 1,
    overflow: "hidden",
    height: 943,
    width: "100%",
    // backgroundColor: 'black',
  },
});

export default Job_des;
