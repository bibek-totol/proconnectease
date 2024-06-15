// Jobs2.js
import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  FlatList,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import useFetch from "../hooks/useFetch";
import axios from 'axios';
import Spacing from "../constants1/Spacing";
import FontSize from "../constants1/FontSize";
import Colors from "../constants1/Colors";
const Jobs3 = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const spacing = 20;
  const avatarSize = 70;
  


  const searchJobs = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
            params: {
                query: searchTerm,
                // ...other API parameters as needed
            },
            headers: {
                'X-RapidAPI-Key': '398b364e9cmsha7bb97bdb5b943cp10cb7ejsn002d2d2c8999',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com' 
            }
        });
       

        if (response.data && response.data.data) {
            setJobs(response.data.data); // Extract job listings
          } else {
            console.warn('Invalid data format from API');
          }
        console.log(response.data);// Assuming the API returns data in this format
    } catch (error) {
        console.error('Job search error:', error); 
        // Handle API errors appropriately
    } finally {
        setIsLoading(false);
    }
};



//   useEffect(() => {
//     setJobs(null);
//   }, []);

  try {
    return (
      <View style={{ backgroundColor: "#808080" }}>
        {/* TextInput for searching */}

        <TextInput
          placeholder="Search for jobs"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={searchJobs}
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
        
      ]}
          
        />



        {
            isLoading ? (
           <ActivityIndicator size="large" color="blue" />
            ):(
                <FlatList
          data={jobs}
          keyExtractor={(item) => item.index}
          contentContainerStyle={{
            padding: spacing,
            paddingTop: StatusBar.currentHeight || 42,
          }}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("Job_des", {
                    job_name: item.job_title,
                    company: item.employer_name,
                    salary: item.job_city,
                    image: item.employer_logo,
                    applybefore: item.job_offer_expiration_datetime_utc,
                    jobtype: item.job_employment_type,
                    posted_on: item.job_posted_at_datetime_utc,
                    job_description: item.job_description,
                    job_qualityscore: item.job_apply_quality_score,
                    job_applylink: item.job_apply_link,
                    longitiude: item.job_longitude,
                    latitude: item.job_latitude,
                    website: item.employer_website,
                  })
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    padding: spacing,
                    marginBottom: spacing,
                    borderRadius: 12,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    shadowColor: "rgb(100,100,100)",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                  }}
                >
                  <Image
                    source={{ uri: item.employer_logo }}
                    style={{
                      width: avatarSize,
                      height: avatarSize,
                      borderRadius: avatarSize,
                      marginRight: spacing / 2,
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "700",
                      }}
                    >
                      {item.job_title}
                    </Text>
                    <Text style={{ fontSize: 18, opacity: 0.7 }}>
                      {item.employer_name}
                    </Text>
                    <Text
                      style={{ fontSize: 14, opacity: 0.8, color: "#0099cc" }}
                    >
                      {item.job_city}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          }}

       
        />

            )
        }

        {/* FlatList to display job data */}
      
       
      </View>
    );
  } catch (error) {
    console.error("Error in rendering Jobs2 component:", error);
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});

export default Jobs3;
