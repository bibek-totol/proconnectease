import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, Padding } from "../GlobalStyles";

const Job_record = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14ProMax4}>
      <Image
        style={[styles.iphone14ProMax4Child, styles.iconBatteryLayout]}
        resizeMode="cover"
        source={require("../assets/group-14.png")}
      />
      <View style={[styles.iphone14ProMax4Item, styles.iphone14Layout]} />
      <View style={[styles.iphone14ProMax4Inner, styles.iphone14Layout]} />
      <Pressable
        style={styles.iconlybulkarrowLeftCircl}
        onPress={() => navigation.navigate("IPhone14ProMax2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlybulkarrowleftcircle.png")}
        />
      </Pressable>
      <View style={styles.iphone678Se}>
        <View style={[styles.modelight, styles.modedarkLayout]}>
          <View style={[styles.rightSide, styles.sidePosition]}>
            <Image
              style={[styles.iconBattery, styles.iconBatteryLayout]}
              resizeMode="cover"
              source={require("../assets/icon--battery.png")}
            />
            <Text style={[styles.text, styles.textPosition]}>100%</Text>
            <Image
              style={[styles.iconAlarm, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--alarm.png")}
            />
            <Image
              style={[styles.iconBluetooth, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--bluetooth.png")}
            />
          </View>
          <View style={[styles.leftSide, styles.sidePosition]}>
            <Image
              style={styles.iconSignal}
              resizeMode="cover"
              source={require("../assets/icon--signal.png")}
            />
            <Text style={[styles.carrier, styles.carrierFlexBox]}>Figma</Text>
            <Image
              style={styles.iconWifi}
              resizeMode="cover"
              source={require("../assets/icon--wifi.png")}
            />
          </View>
        </View>
        <View style={[styles.modedark, styles.modedarkLayout]}>
          <View style={[styles.iphone678Se1, styles.iphone678Se1Position]}>
            <View style={[styles.rightSide, styles.sidePosition]}>
              <Image
                style={[styles.iconBattery, styles.iconBatteryLayout]}
                resizeMode="cover"
                source={require("../assets/icon--battery11.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>100%</Text>
              <Image
                style={[styles.iconAlarm, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon--alarm11.png")}
              />
              <Image
                style={[styles.iconBluetooth, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon--bluetooth11.png")}
              />
            </View>
            <View style={[styles.leftSide, styles.sidePosition]}>
              <Image
                style={styles.iconSignal}
                resizeMode="cover"
                source={require("../assets/icon--signal11.png")}
              />
              <Text style={[styles.carrier1, styles.text1Typo]}>Figma</Text>
              <Image
                style={styles.iconWifi}
                resizeMode="cover"
                source={require("../assets/icon--wifi11.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.myProjects, styles.titleTypo3]}>My projects</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.iphone14ProMax4Child1, styles.rectangleViewLayout]}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <View style={styles.ellipseParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone13ProMax1")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconlyboldcamera, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlyboldcamera.png")}
        />
        <Text style={[styles.title, styles.titleFlexBox]} numberOfLines={1}>
          Record
        </Text>
        <Text style={[styles.title1, styles.titleFlexBox]} numberOfLines={1}>
          Video 1
        </Text>
        <Text style={[styles.title2, styles.titleClr]} numberOfLines={1}>
          19 Sep, 2023
        </Text>
        <Text style={[styles.title3, styles.titleTypo]} numberOfLines={1}>
          01:06
        </Text>
        <Text style={[styles.title4, styles.titleTypo]} numberOfLines={1}>
          01:06
        </Text>
        <Text style={[styles.title5, styles.titlePosition1]} numberOfLines={1}>
          19 Sep, 2023
        </Text>
        <Text style={[styles.title6, styles.titlePosition1]} numberOfLines={1}>
          Video 2
        </Text>
        <Text style={[styles.title7, styles.titleFlexBox]} numberOfLines={1}>
          Show
        </Text>
        <Text style={styles.titlePosition} numberOfLines={1}>
          Download
        </Text>
        <Text style={[styles.title9, styles.titlePosition]} numberOfLines={1}>
          Download
        </Text>
        <Image
          style={[styles.iconlyboldplay, styles.iphone678Se1Position]}
          resizeMode="cover"
          source={require("../assets/iconlyboldplay.png")}
        />
        <Image
          style={[styles.groupChild, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/group-15.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax1")}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.title10, styles.titleTypo1]} numberOfLines={1}>
          New Project
        </Text>
        <View style={[styles.camera, styles.cameraLayout]} />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/group-16.png")}
        />
        <Image
          style={[styles.plusIcon, styles.cameraLayout]}
          resizeMode="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBatteryLayout: {
    height: 12,
    position: "absolute",
  },
  iphone14Layout: {
    height: 113,
    width: 378,
    borderWidth: 3,
    borderColor: Color.primaryBLACK,
    borderStyle: "solid",
    borderRadius: Border.br_lgi,
    left: 25,
    position: "absolute",
    backgroundColor: Color.colorSteelblue_100,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  modedarkLayout: {
    height: 20,
    width: 375,
  },
  sidePosition: {
    top: 3,
    position: "absolute",
  },
  textPosition: {
    textAlign: "right",
    right: 30,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  carrierFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    marginLeft: 4,
  },
  iphone678Se1Position: {
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    color: Color.primaryWHITE,
    //fontFamily: FontFamily.sFSubheadlineSemibold,
    lineHeight: 16,
    fontSize: FontSize.aPPLabel12M_size,
  },
  titleTypo3: {
    textAlign: "center",
   // fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 88,
    width: 74,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  vectorIconLayout1: {
    width: "9.77%",
    height: "3.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    borderRadius: Border.br_114xl,
    left: "80.47%",
    right: "9.51%",
    width: "10.02%",
    height: "3.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 64,
    width: 68,
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  titleClr: {
    color: Color.colorGray_500,
    fontSize: FontSize.size_smi,
  },
  titleTypo: {
    fontSize: FontSize.aPPM10_size,
    color: Color.colorGray_500,
    textAlign: "center",
    //fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    position: "absolute",
    overflow: "hidden",
  },
  titlePosition1: {
    left: 76,
    textAlign: "center",
   // fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    position: "absolute",
    overflow: "hidden",
  },
  titlePosition: {
    left: 202,
    top: 86,
    fontSize: FontSize.aPPTitle520M_size,
    textAlign: "center",
   // fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    color: Color.primaryBLACK,
    position: "absolute",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 149,
    width: 378,
    position: "absolute",
  },
  titleTypo1: {
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
  },
  cameraLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14ProMax4Child: {
    top: 851,
    left: 167,
    width: 97,
  },
  iphone14ProMax4Item: {
    top: 466,
  },
  iphone14ProMax4Inner: {
    top: 622,
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  iconlybulkarrowLeftCircl: {
    left: "0.23%",
    top: "5.47%",
    right: "92.02%",
    bottom: "91.13%",
    width: "7.74%",
    height: "3.4%",
    position: "absolute",
  },
  iconBattery: {
    top: 2,
    right: 0,
    width: 27,
  },
  text: {
    color: Color.primaryBLACK,
   // fontFamily: FontFamily.sFSubheadlineSemibold,
    lineHeight: 16,
    fontSize: FontSize.aPPLabel12M_size,
  },
  iconAlarm: {
    right: 77,
    height: 14,
  },
  iconBluetooth: {
    right: 62,
    height: 14,
  },
  rightSide: {
    right: 6,
    width: 91,
    height: 16,
  },
  iconSignal: {
    width: 21,
    height: 14,
  },
  carrier: {
    marginLeft: 4,
    color: Color.primaryBLACK,
    //fontFamily: FontFamily.sFSubheadlineSemibold,
    lineHeight: 16,
    fontSize: FontSize.aPPLabel12M_size,
  },
  iconWifi: {
    width: 15,
    marginLeft: 4,
    height: 14,
  },
  leftSide: {
    left: 4,
    flexDirection: "row",
    overflow: "hidden",
  },
  modelight: {
    overflow: "hidden",
  },
  text1: {
    textAlign: "right",
    right: 30,
    top: 0,
    position: "absolute",
  },
  carrier1: {
    marginLeft: 4,
    textAlign: "left",
    letterSpacing: 0,
  },
  iphone678Se1: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  modedark: {
    marginTop: 32,
  },
  iphone678Se: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#333",
    borderWidth: 1,
    width: 430,
    height: 47,
    padding: Padding.p_base,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorSteelblue_100,
  },
  myProjects: {
    top: 411,
    left: 28,
    fontSize: 24,
    color: Color.primaryBLACK,
  },
  rectangleView: {
    top: 479,
    left: 49,
  },
  iphone14ProMax4Child1: {
    top: 635,
    left: 46,
  },
  vectorIcon: {
    top: "54.18%",
    right: "75.12%",
    bottom: "42.06%",
    left: "15.12%",
  },
  vectorIcon1: {
    top: "70.92%",
    right: "75.81%",
    bottom: "25.32%",
    left: "14.42%",
  },
  vectorIcon2: {
    top: "50.86%",
    bottom: "45.83%",
  },
  vectorIcon3: {
    top: "67.6%",
    bottom: "29.09%",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  iconlyboldcamera: {
    height: "3.39%",
    width: "7.88%",
    top: "3.55%",
    right: "84.59%",
    bottom: "93.05%",
    left: "7.53%",
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    top: 85,
    justifyContent: "center",
    display: "flex",
    width: 68,
    textAlign: "center",
    //fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    height: 14,
    position: "absolute",
    overflow: "hidden",
    left: 0,
  },
  title1: {
    top: 391,
    left: 68,
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    width: 68,
    justifyContent: "center",
    display: "flex",
    height: 14,
    textAlign: "center",
    //fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    position: "absolute",
    overflow: "hidden",
  },
  title2: {
    top: 426,
    left: 72,
    textAlign: "center",
    //fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    position: "absolute",
    overflow: "hidden",
  },
  title3: {
    top: 448,
    left: 72,
  },
  title4: {
    top: 607,
    left: 77,
  },
  title5: {
    top: 585,
    color: Color.colorGray_500,
    fontSize: FontSize.size_smi,
  },
  title6: {
    top: 550,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    width: 68,
    height: 14,
  },
  title7: {
    left: 107,
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    top: 85,
    justifyContent: "center",
    display: "flex",
    width: 68,
    textAlign: "center",
    //fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  title9: {
    width: 90,
    height: 13,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  iconlyboldplay: {
    height: "10.34%",
    width: "23.29%",
    right: "40.07%",
    bottom: "89.66%",
    left: "36.64%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupChild: {
    left: 214,
  },
  ellipseParent: {
    top: 96,
    left: 69,
    width: 292,
    height: 619,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    top: 0,
    height: 149,
    borderWidth: 3,
    borderColor: Color.primaryBLACK,
    borderStyle: "solid",
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorSteelblue_100,
  },
  title10: {
    top: 94,
    left: 135,
    textAlign: "center",
    //fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    position: "absolute",
    overflow: "hidden",
  },
  camera: {
    top: 124,
    left: 291,
  },
  groupInner: {
    top: 28,
    left: 164,
    width: 49,
    height: 45,
    position: "absolute",
  },
  plusIcon: {
    top: 39,
    left: 177,
  },
  rectangleParent: {
    top: 231,
    left: 26,
  },
  iphone14ProMax4: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorSteelblue_100,
  },
});

export default Job_record;
