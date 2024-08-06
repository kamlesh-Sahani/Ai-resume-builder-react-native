import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ResumeWorkExperience = ({ setWorkExperience }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [workType, setWorkType] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [workExperiences, setWorkExperiences] = useState([]);

  const handleSave = () => {
    const newExperience = { position, company, duration, workType, responsibilities };
    setWorkExperiences((prev) => [...prev, newExperience]);
    setWorkExperience((prev) => [...prev, newExperience]);
    // Clear input fields
    setPosition("");
    setCompany("");
    setDuration("");
    setWorkType("");
    setResponsibilities("");
  };

  const handleRemove = (index) => {
    const updatedExperiences = workExperiences.filter((_, i) => i !== index);
    setWorkExperiences(updatedExperiences);
    setWorkExperience(updatedExperiences);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        style={{ gap: 1 }}
        onPress={() => setShowInput((prev) => !prev)}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.heading}>Work Experience (optional)</Text>
          <Icon
            name={showInput ? "keyboard-arrow-down" : "keyboard-arrow-right"}
            size={30}
          />
        </View>
        <Text style={styles.subHeading}>Add your work experience</Text>
      </TouchableOpacity>

      {showInput && (
        <View style={{ gap: 1, marginTop: 10, alignItems: "center" }}>
          <TextInput
            label="Company"
            value={company}
            onChangeText={(text) => setCompany(text)}
            style={styles.input}
            mode="outlined"
            placeholder="eg. Google"
          />
          <TextInput
            label="Position"
            value={position}
            onChangeText={(text) => setPosition(text)}
            style={styles.input}
            mode="outlined"
            placeholder="eg. Frontend Developer"
          />

          <TextInput
            label="Work Type"
            value={workType}
            onChangeText={(text) => setWorkType(text)}
            style={styles.input}
            mode="outlined"
            placeholder="eg. Remote "
          />

          <TextInput
            label="Duration"
            value={duration}
            onChangeText={(text) => setDuration(text)}
            style={styles.input}
            mode="outlined"
            placeholder="eg. May 2011 - July 2021"
          />

          <TextInput
            label="Responsibilities"
            value={responsibilities}
            onChangeText={(text) => setResponsibilities(text)}
            style={styles.input}
            mode="outlined"
            placeholder="eg. Assisted in developing interactive web pages using HTML, CSS, and JavaScript."
          />
          
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Add Experience
          </Button>
        </View>
      )}

      <ScrollView style={{ marginTop: 10 }}>
        {workExperiences.map((experience, index) => (
          <View key={index} style={styles.experienceContainer}>
            <Text style={styles.experienceText}>{experience.company}</Text>
            <Text style={styles.experienceText}>{experience.position}</Text>
            <Text style={styles.experienceText}>{experience.duration}</Text>
            <Text style={styles.experienceText}>{experience.workType}</Text>
            <Text style={styles.experienceText}>{experience.responsibilities}</Text>
            <Button
              mode="outlined"
              onPress={() => handleRemove(index)}
              style={styles.removeButton}
            >
              Remove
            </Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ResumeWorkExperience;

const styles = StyleSheet.create({
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
  button: {
    marginTop: 10,
    width: width * 0.87,
  },
  experienceContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  experienceText: {
    fontSize: 16,
  },
  removeButton: {
    marginTop: 10,
  },
});
