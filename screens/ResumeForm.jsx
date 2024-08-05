import {
    StyleSheet,
    Text,
    View,
    Platform,
    SafeAreaView,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { TextInput } from "react-native-paper";
  import Icon from 'react-native-vector-icons/MaterialIcons';
  
  const { width } = Dimensions.get("window");
  
  const ResumePersonalData = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
  
    const [showInput, setShowInput] = useState(false);
  
    return (
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={{ gap: 1 }} onPress={() => setShowInput((prev) => !prev)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.heading}>Personal Data</Text>
            <Icon name={showInput ? "keyboard-arrow-down" : "keyboard-arrow-right"} size={30} />
          </View>
          <Text style={styles.subHeading}>
            Complete your personal data to make your resume better
          </Text>
        </TouchableOpacity>
  
        {showInput && (
          <View style={{ gap: 1, marginTop: 10, alignItems: "center" }}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Full Name"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Portfolio link"
              value={portfolio}
              onChangeText={(text) => setPortfolio(text)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Linkedin account"
              value={linkedin}
              onChangeText={(text) => setLinkedin(text)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Github account"
              value={github}
              onChangeText={(text) => setGithub(text)}
              style={styles.input}
              mode="outlined"
            />
          </View>
        )}
      </View>
    );
  };
  
  const ResumeForm = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "500", textAlign: 'center' }}>
            Fill in your data
          </Text>
          <ScrollView>
            <View>
              <ResumePersonalData />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ResumeForm;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
    },
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingHorizontal: 10,
    },
    heading: {
      fontSize: 19,
      fontWeight: "500",
    },
    subHeading: {
      color: "#808080",
      fontSize: 15,
    },
    input: {
      width: width * 0.87, // Full width input
      marginBottom: 15, // Space between input fields
    },
  });
  