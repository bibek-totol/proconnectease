import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color,  FontSize, Padding, Border } from "../GlobalStyles";

const Job_explore = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.jobExplorJob2, styles.jobBg]}>
      <View style={[styles.component2, styles.component2Position]}>
        <View style={[styles.component2Child, styles.component2Position]} />
      </View>
     
      <View style={[styles.component59, styles.groupContainerLayout]}>
        <View style={[styles.component59Child, styles.bottomNavShadowBox]} />
        <View style={styles.component50Parent}>
          <Image
            style={[styles.component50Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/Component50.png")}
          />
          <Text style={styles.myChats}>Company details</Text>
          <Image
            style={[styles.component50Icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/Component50(1).png")}
          />
        </View>
      </View>
      <View style={[styles.us, styles.groupParentLayout]}>
        <View style={styles.usChild} />
        <View style={styles.groupParent}>
          <View style={[styles.groupWrapper, styles.component2Position]}>
            <View style={[styles.component2, styles.component2Position]}>
              <Text style={[styles.uxProductEngineer, styles.samsungPosition]}>
                Ux Product Engineer
              </Text>
              <Text style={[styles.samsung, styles.samsungTypo]}>Samsung</Text>
            </View>
          </View>
          <Image
            style={[styles.component3Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/Component3.png")}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.component50Group}>
              <Image
                style={styles.component50Icon2}
                resizeMode="cover"
                source={require("../assets/component-5021.png")}
              />
              <Text style={[styles.applications, styles.applicationsTypo]}>
                46 Applications
              </Text>
            </View>
            <View style={styles.frameWrapper}>
              <View style={styles.component50Group}>
                <Image
                  style={styles.component50Icon2}
                  resizeMode="cover"
                  source={require("../assets/component-5031.png")}
                />
                <Text style={[styles.applications, styles.applicationsTypo]}>
                  Applied
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.instanceParent, styles.component2Position]}>
            <View style={styles.internshipBorder}>
              <Text style={[styles.internship, styles.internshipTypo]}>
                internship
              </Text>
            </View>
            <View style={[styles.internshipContainer, styles.internshipBorder]}>
              <Text style={[styles.internship, styles.internshipTypo]}>
                Permanent Job
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.viewApplicationParent}>
          <Text style={styles.viewApplication}>View Application</Text>
          <Image
            style={styles.component50Icon4}
            resizeMode="cover"
            source={require("../assets/component-5041.png")}
          />
        </View>
        <View style={styles.groupView}>
          <Image
            style={[styles.component50Icon5, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/Component50(2).png")}
          />
          <Image
            style={[styles.component51Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/Component51.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupContainerLayout]}>
        <View style={[styles.frameContainer, styles.groupContainerLayout]}>
          <View style={[styles.rectangleParent, styles.rectangleFlexBox]}>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleFlexBox]}>
            <Image
              style={styles.frameChild1Layout}
              resizeMode="cover"
              source={require("../assets/Rectangle18(1).png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChild1Layout]}
              resizeMode="cover"
              source={require("../assets/Rectangle18(1).png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChild1Layout]}
              resizeMode="cover"
              source={require("../assets/Rectangle18(1).png")}
            />
          </View>
        </View>
        <View style={[styles.lineParent, styles.seeLayout]}>
          <View style={[styles.groupChild, styles.lineViewLayout]} />
          <View style={[styles.seeAll, styles.seeLayout]}>
            <Text style={[styles.exploreJobs, styles.samsungPosition]}>
              Company images
            </Text>
            <Text style={styles.seeTypo}>View More</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <View style={[styles.groupParent1, styles.groupParentLayout]}>
          <View style={[styles.seeAll, styles.seeLayout]}>
            <View style={[styles.groupChild, styles.lineViewLayout]} />
            <View style={[styles.seeAll, styles.seeLayout]}>
              <Text style={[styles.exploreJobs, styles.samsungPosition]}>
                About company
              </Text>
              <Text style={[styles.seeAll3, styles.seeTypo]}>View More</Text>
            </View>
          </View>
          <Text style={[styles.samsungPayOffers, styles.internshipTypo]}>
            Samsung Pay offers an online payment method which can be accessed
            from a web browser (PC or mobile). W3C mobile web payments. Merchant
            websites can Have more, carry less. Samsung Pay gives you secure and
            easy access to your method of payment in more stores than any other
            mobile payment service.
          </Text>
        </View>
      </View>
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <View style={[styles.lineContainer, styles.groupParentLayout]}>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.seeAll4, styles.seeLayout]}>
            <Text style={[styles.exploreJobs, styles.samsungPosition]}>
              About the internship
            </Text>
            <Text style={[styles.seeAll3, styles.seeTypo]}>View More</Text>
          </View>
        </View>
        <Text style={[styles.setRealisticGoals, styles.applicationsTypo]}>
          Set realistic goals for Your program
        </Text>
        <Text style={[styles.widenYourTalentContainer, styles.internshipTypo]}>
          {`1. Widen your talent pool. ...
2. Look at the program from your interns' perspectives.
3. Get to know your interns. ...
4. Allow interns to get involved in company`}{" "}
          work product. ...5. Encourage ongoing feedback. ...6. Offer guidance
          based on your interns'needs.
        </Text>
      </View>
      <View style={[styles.groupParent3, styles.groupParentLayout]}>
        <View style={[styles.lineContainer, styles.groupParentLayout]}>
          <View style={[styles.lineContainer, styles.groupParentLayout]}>
            <View style={[styles.lineContainer, styles.groupParentLayout]}>
              <View style={[styles.lineView, styles.lineViewLayout]} />
              <View style={[styles.seeAll4, styles.seeLayout]}>
                <Text style={[styles.exploreJobs, styles.samsungPosition]}>
                  Skills required
                </Text>
                <Text style={[styles.seeAll3, styles.seeTypo]}>View More</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildPosition1]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildPosition1]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild8, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
        <Image
          style={[styles.groupChild9, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/Rectangle25.png")}
        />
      </View>
      <View style={[styles.groupParent4, styles.groupParentLayout]}>
        <View style={[styles.lineContainer, styles.groupParentLayout]}>
          <View style={[styles.lineContainer, styles.groupParentLayout]}>
            <View style={[styles.lineView, styles.lineViewLayout]} />
            <View style={[styles.seeAll4, styles.seeLayout]}>
              <Text style={[styles.exploreJobs, styles.samsungPosition]}>
                Company requirement
              </Text>
              <Text style={[styles.seeAll3, styles.seeTypo]}>View More</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
          <View
            style={[styles.rectangleParent2, styles.rectangleParentPosition]}
          >
            <Image
              style={[styles.groupChild11, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/Rectangle25(1).png")}
            />
            <Text
              style={[styles.certificate, styles.employeeTypo]}
            >{`Certificate `}</Text>
            <Text style={[styles.forAllSkills, styles.allTypo]}>
              For all skills
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent3, styles.groupChild12Layout]}>
          <View style={[styles.groupChild12, styles.groupChild12Layout]} />
          <View
            style={[styles.rectangleParent4, styles.rectangleParentPosition]}
          >
            <Image
              style={[styles.groupChild13, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/Rectangle25(1).png")}
            />
            <Text style={[styles.certificate, styles.employeeTypo]}>
              Job offer
            </Text>
            <Text style={[styles.allDetails, styles.allTypo]}>All Details</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent5, styles.groupChild14Layout]}>
          <View style={[styles.groupChild14, styles.groupChild14Layout]} />
          <View
            style={[styles.rectangleParent6, styles.rectangleParentPosition]}
          >
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/Rectangle25(1).png")}
            />
            <Text style={[styles.employee, styles.employeeTypo]}>Employee</Text>
            <Text style={[styles.yearsExperience, styles.allTypo]}>
              5 years experience
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.bottomNavShadowBox]}>
        <View style={styles.tab}>
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🏠
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Home
          </Text>
        </View>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            👥
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Profile
          </Text>
        </Pressable>
        <View style={styles.tab}>
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            📝
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Jobs
          </Text>
        </View>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Frame")}
        >
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🗂️
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Job Posting
          </Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🔍
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobBg: {
    backgroundColor: Color.primaryWHITE,
    width: "100%",
  },
  component2Position: {
    bottom: "0%",
    position: "absolute",
  },
  groupContainerLayout: {
    width: 375,
    left: 0,
  },
  bottomNavShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    width: 335,
    position: "absolute",
  },
  samsungPosition: {
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  samsungTypo: {
    //fontFamily: FontFamily.aPPTextButton14R,
    color: Color.shadesOfBlackGrey3,
  },
  applicationsTypo: {
    lineHeight: 16,
    fontSize: FontSize.aPP14Medium_size,
    textAlign: "left",
  },
  internshipTypo: {
    fontSize: FontSize.aPPLabel12M_size,
    lineHeight: 16,
    textAlign: "left",
    //fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
  },
  internshipBorder: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
  },
  iconLayout: {
    width: "40%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 2,
    width: 45,
    borderRadius: Border.br_11xs,
  },
  frameChild1Layout: {
    height: 163,
    borderRadius: Border.br_sm,
    width: 335,
  },
  seeLayout: {
    height: 20,
    width: 335,
    position: "absolute",
  },
  lineViewLayout: {
    height: 0,
    borderTopWidth: 0.3,
    borderColor: Color.shadesOfBlackGrey3,
    width: 335,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  groupItemLayout: {
    height: 164,
    width: 375,
    left: 0,
    position: "absolute",
  },
  seeTypo: {
    textAlign: "right",
    left: "74.33%",
    top: "27.5%",
    width: "25.67%",
    lineHeight: 16,
    fontSize: FontSize.aPP14Medium_size,
    color: Color.shadesOfBlackGrey3,
    //fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 51,
    width: 51,
    position: "absolute",
  },
  groupChildPosition1: {
    left: 142,
    height: 51,
    width: 51,
    position: "absolute",
  },
  groupChildPosition: {
    left: 71,
    height: 51,
    width: 51,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 100,
    top: 55,
  },
  groupChildShadowBox: {
    height: 78,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    top: 22,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    backgroundColor: Color.primaryWHITE,
  },
  rectangleParentPosition: {
    height: 88,
    left: 8,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 44,
    borderRadius: Border.br_81xl,
    top: 0,
    position: "absolute",
  },
  employeeTypo: {
    top: 52,
    lineHeight: 16,
    fontSize: FontSize.aPP14Medium_size,
    textAlign: "left",
   // fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
    color: Color.primaryBLACK,
    position: "absolute",
  },
  allTypo: {
    color: Color.shadesOfBlackGrey2,
    top: 72,
    fontSize: FontSize.aPPM10_size,
    lineHeight: 16,
    //: FontFamily.aPPM10,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  groupChild12Layout: {
    width: 79,
    position: "absolute",
  },
  groupChild14Layout: {
    width: 110,
    position: "absolute",
  },
  iconFlexBox: {
   // fontFamily: FontFamily.robotoRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
  },
  component2Child: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
    backgroundColor: Color.primaryWHITE,
  },
  component2: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.primaryBLACK,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.05%",
    top: "31.96%",
    bottom: "32.99%",
    width: 1,
    opacity: 0.4,
    maxHeight: "100%",
    right: 0,
    position: "absolute",
  },
  capacity: {
    height: "64.95%",
    top: "17.53%",
    right: 4,
    bottom: "17.53%",
    borderRadius: 1,
    backgroundColor: Color.primaryBLACK,
    width: 18,
    position: "absolute",
  },
  battery: {
    width: 24,
    right: 0,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 9,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 9,
  },
  batteryParent: {
    height: "25.8%",
    top: "39.36%",
    right: 14,
    bottom: "34.84%",
    width: 67,
    position: "absolute",
  },
  time: {
    marginTop: -5,
    top: "50%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
   // fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    color: Color.primaryBLACK,
    fontWeight: "600",
    lineHeight: 20,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.87%",
    top: "15.96%",
    bottom: "36.17%",
    left: 21,
    width: 54,
    position: "absolute",
  },
  barsStatusBarDesignL: {
    height: "2.76%",
    bottom: "97.24%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  component59Child: {
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.primaryWHITE,
  },
  component50Icon: {
    right: "92.84%",
    width: "7.16%",
    maxWidth: "100%",
    bottom: "0%",
    height: "100%",
    left: "0%",
  },
  myChats: {
    width: "68.36%",
    left: "11.94%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    //fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  component50Icon1: {
    left: "92.84%",
    width: "7.16%",
    maxWidth: "100%",
    bottom: "0%",
    height: "100%",
    right: "0%",
  },
  component50Parent: {
    height: "50%",
    width: "89.33%",
    top: "25%",
    right: "5.33%",
    bottom: "25%",
    left: "5.33%",
    position: "absolute",
  },
  component59: {
    top: 44,
    height: 48,
    position: "absolute",
  },
  usChild: {
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_sm,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.primaryWHITE,
  },
  uxProductEngineer: {
    //fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    top: "0%",
    width: "100%",
  },
  samsung: {
    width: "32.22%",
    top: "60%",
    fontSize: FontSize.aPPInput16R_size,
    color: Color.shadesOfBlackGrey3,
    textAlign: "left",
    left: "0%",
    position: "absolute",
    lineHeight: 20,
    //fontFamily: FontFamily.aPPTextButton14R,
  },
  groupWrapper: {
    width: "81.02%",
    left: "18.98%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  component3Icon: {
    height: "80%",
    width: "13.56%",
    right: "86.44%",
    bottom: "20%",
    left: "0%",
  },
  groupParent: {
    height: "23.81%",
    width: "88.06%",
    top: "11.43%",
    right: "5.97%",
    bottom: "64.76%",
    left: "5.97%",
    position: "absolute",
  },
  component50Icon2: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  applications: {
    marginLeft: 8,
    color: Color.shadesOfBlackGrey3,
    //fontFamily: FontFamily.aPPTextButton14R,
  },
  component50Group: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    marginLeft: 16,
    flexDirection: "row",
  },
  frameGroup: {
    height: "30.77%",
    bottom: "69.23%",
    flexDirection: "row",
    left: 0,
    top: "0%",
    position: "absolute",
  },
  internship: {
    color: Color.shadesOfBlackGrey3,
  },
  internshipContainer: {
    marginLeft: 16,
  },
  instanceParent: {
    height: "46.15%",
    width: "90.35%",
    top: "53.85%",
    right: "9.65%",
    flexDirection: "row",
    left: "0%",
  },
  frameParent: {
    height: "24.76%",
    top: "40.95%",
    bottom: "34.29%",
    width: 228,
    left: 20,
    position: "absolute",
  },
  viewApplication: {
    color: Color.primaryWHITE,
    fontSize: FontSize.aPPLabel12M_size,
    lineHeight: 16,
    textAlign: "left",
    //fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
  },
  component50Icon4: {
    height: 24,
    marginLeft: 4,
    width: 24,
    overflow: "hidden",
  },
  viewApplicationParent: {
    height: "15.24%",
    width: "43.88%",
    top: "73.33%",
    right: "50.15%",
    bottom: "11.43%",
    backgroundColor: Color.successErrorBLUE,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    left: "5.97%",
    alignItems: "center",
    position: "absolute",
  },
  component50Icon5: {
    right: "60%",
    left: "0%",
  },
  component51Icon: {
    left: "60%",
    right: "0%",
  },
  groupView: {
    height: "11.43%",
    width: "17.91%",
    top: "75.24%",
    right: "3.58%",
    bottom: "13.33%",
    left: "78.51%",
    position: "absolute",
  },
  us: {
    top: 108,
    height: 210,
    left: 20,
  },
  frameChild: {
    backgroundColor: Color.shadesOfBlackGrey5,
    width: 45,
    borderRadius: Border.br_11xs,
  },
  frameItem: {
    width: 45,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.successErrorBLUE,
    marginLeft: 8,
  },
  frameInner: {
    backgroundColor: Color.shadesOfBlackGrey5,
    width: 45,
    borderRadius: Border.br_11xs,
    marginLeft: 8,
  },
  rectangleParent: {
    top: 175,
    left: 157,
    width: 61,
  },
  frameChild1: {
    marginLeft: 20,
  },
  rectangleGroup: {
    top: 0,
    width: 375,
    left: 0,
  },
  frameContainer: {
    top: 38,
    height: 177,
    position: "absolute",
  },
  groupChild: {
    top: -16,
    display: "none",
  },
  exploreJobs: {
    width: "74.33%",
    //fontFamily: FontFamily.aPPM10,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
    top: "0%",
  },
  seeAll: {
    top: 0,
    left: 0,
  },
  lineParent: {
    top: 0,
    left: 20,
  },
  groupContainer: {
    top: 514,
    height: 215,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.e1,
    top: 0,
  },
  seeAll3: {
    display: "none",
  },
  samsungPayOffers: {
    top: 36,
    width: 335,
    position: "absolute",
    left: 0,
    color: Color.primaryBLACK,
    fontSize: FontSize.aPPLabel12M_size,
  },
  groupParent1: {
    top: 16,
    height: 132,
    left: 20,
  },
  rectangleContainer: {
    top: 334,
  },
  lineView: {
    top: 0,
  },
  seeAll4: {
    top: 19,
    left: 0,
  },
  lineContainer: {
    height: 39,
    top: 0,
    left: 0,
  },
  setRealisticGoals: {
    //fontFamily: FontFamily.aPPTextButton14SB,
    color: Color.successErrorBLUE,
    top: 55,
    left: 0,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.aPP14Medium_size,
    position: "absolute",
  },
  widenYourTalentContainer: {
    top: 79,
    width: 335,
    position: "absolute",
    left: 0,
    color: Color.primaryBLACK,
    fontSize: FontSize.aPPLabel12M_size,
  },
  groupParent2: {
    top: 745,
    height: 191,
    left: 20,
  },
  groupChild2: {
    top: 55,
    left: 0,
  },
  groupChild3: {
    top: 122,
    left: 0,
  },
  groupChild4: {
    top: 55,
  },
  groupChild5: {
    top: 122,
  },
  groupChild6: {
    top: 55,
  },
  groupChild7: {
    top: 122,
  },
  groupChild8: {
    left: 213,
    top: 55,
  },
  groupChild9: {
    left: 284,
    top: 55,
  },
  groupParent3: {
    top: 952,
    height: 173,
    left: 20,
  },
  rectangleView: {
    width: 91,
    position: "absolute",
  },
  groupChild11: {
    left: 16,
  },
  certificate: {
    left: 0,
  },
  forAllSkills: {
    left: 8,
    top: 72,
  },
  rectangleParent2: {
    width: 75,
  },
  rectangleParent1: {
    width: 91,
    position: "absolute",
    left: 0,
  },
  groupChild12: {
    height: 78,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    top: 22,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    backgroundColor: Color.primaryWHITE,
  },
  groupChild13: {
    left: 10,
  },
  allDetails: {
    left: 6,
  },
  rectangleParent4: {
    width: 63,
  },
  rectangleParent3: {
    left: 111,
    height: 100,
    top: 55,
  },
  groupChild14: {
    height: 78,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    top: 22,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    backgroundColor: Color.primaryWHITE,
  },
  groupChild15: {
    left: 25,
  },
  employee: {
    left: 11,
  },
  yearsExperience: {
    left: 0,
  },
  rectangleParent6: {
    width: 94,
  },
  rectangleParent5: {
    left: 210,
    height: 100,
    top: 55,
  },
  groupParent4: {
    top: 1141,
    height: 155,
    left: 20,
  },
  icon: {
    lineHeight: 28,
    width: 28,
    height: 28,
   // fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.aPPTitle520M_size,
    color: Color.primaryBLACK,
  },
  title: {
    alignSelf: "stretch",
    lineHeight: 14,
    height: 14,
    fontSize: FontSize.aPPM10_size,
   // fontFamily: FontFamily.robotoRegular,
    color: Color.primaryWHITE,
  },
  tab: {
    padding: Padding.p_9xs,
    alignItems: "center",
    flex: 1,
  },
  bottomNav: {
    top: 1541,
    left: 2,
    backgroundColor: Color.colorDarkslategray_100,
    shadowRadius: 6,
    elevation: 6,
    width: 428,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    overflow: "hidden",
  },
  jobExplorJob2: {
    height: 1361,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Job_explore;
