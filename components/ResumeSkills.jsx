import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ResumeSkills = ({ setSkills }) => {
  const [skill, setSkill] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [skills, setSkillsList] = useState([]);

  const handleSave = () => {
    const newSkills = skill.split(",").map((s) => s.trim()).filter((s) => s);
    setSkillsList((prev) => [...prev, ...newSkills]);
    setSkills((prev) => [...prev, ...newSkills]);
    setSkill("");
  };

  const handleRemove = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkillsList(updatedSkills);
    setSkills(updatedSkills);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        style={{ gap: 1 }}
        onPress={() => setShowInput((prev) => !prev)}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.heading}>Skills</Text>
          <Icon
            name={showInput ? "keyboard-arrow-down" : "keyboard-arrow-right"}
            size={30}
          />
        </View>
        <Text style={styles.subHeading}>Add your skills</Text>
      </TouchableOpacity>

      {showInput && (
        <View style={{ gap: 1, marginTop: 10, alignItems: "center" }}>
          <TextInput
            label="Skills"
            value={skill}
            onChangeText={(text) => setSkill(text)}
            style={styles.input}
            mode="outlined"
            placeholder="e.g. TypeScript"
          />
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Add Skills
          </Button>
        </View>
      )}

      <ScrollView style={{ marginTop: 10 }}>
        {skills.map((s, index) => (
          <View key={index} style={styles.skillContainer}>
            <Text style={styles.skillText}>{s}</Text>
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

export default ResumeSkills;

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
  skillContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skillText: {
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 10,
  },
});
