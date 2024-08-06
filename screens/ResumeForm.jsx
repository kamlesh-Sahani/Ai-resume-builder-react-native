import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar
} from "react-native";
import {Button} from 'react-native-paper'
import ResumePersonalData from "../components/ResumePersonal";
import ResumeEducation from "../components/ResumeEducation";
import ResumeWorkExperience from "../components/ResumeExperience";
import ResumeSkills from "../components/ResumeSkills";
import ResumeProjectData from "../components/ResumeProject";
const {width} = Dimensions.get('window');
const ResumeForm = () => {
  const [personalData, setPersonalData] = useState({});
  const [education, setEducation] = useState({});
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const buttonDisable = !personalData.fullName || !personalData.email || !education.degree || !education.institution || !education.location
  const handleSubmit = () => {
    const resumeData = {
      personalData,
      education,
      workExperience,
      skills,
      projectData
    };
    console.log(resumeData,"resumeData");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
         <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Fill in your data</Text>
          <ResumePersonalData setPersonalData={setPersonalData} />
          <ResumeEducation setEducation={setEducation} />
          <ResumeProjectData setProjectData={setProjectData} />
          <ResumeWorkExperience setWorkExperience={setWorkExperience} />
          <ResumeSkills setSkills={setSkills} />
        </View>
      </ScrollView>
      <TouchableOpacity >
        <Button mode="contained" style={styles.btn} onPress={handleSubmit} disabled={buttonDisable}>
          Genearte Resume
        </Button>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResumeForm;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    width: width * 0.87,
    backgroundColor: "#017335",
    padding: 4,
    borderRadius: 5,
    color: "#fff",
    margin:'auto'
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  }
});
