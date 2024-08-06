import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get("window");

const ResumeProjectData = ({ setProjectData }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [link, setLink] = useState("");

  const [showInput, setShowInput] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleSave = () => {
    const newProject = { projectTitle, description, link, github };
    setProjects((prev) => [...prev, newProject]);
    setProjectData((prev) => [...prev, newProject]);
    setProjectTitle("");
    setDescription("");
    setLink("");
    setGithub("");
  };

  const handleRemove = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    setProjectData(updatedProjects);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity style={{ gap: 1 }} onPress={() => setShowInput((prev) => !prev)}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.heading}>Projects</Text>
          <Icon name={showInput ? "keyboard-arrow-down" : "keyboard-arrow-right"} size={30} />
        </View>
        <Text style={styles.subHeading}>
          Add your projects to showcase your work
        </Text>
      </TouchableOpacity>

      {showInput && (
        <View style={{ gap: 1, marginTop: 10, alignItems: "center" }}>
          <TextInput
            label="Project Title"
            value={projectTitle}
            onChangeText={(text) => setProjectTitle(text)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.input}
            mode="outlined"
            multiline
          />
          <TextInput
            label="Project Link"
            value={link}
            onChangeText={(text) => setLink(text)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Github Link"
            value={github}
            onChangeText={(text) => setGithub(text)}
            style={styles.input}
            mode="outlined"
          />
          <Button mode='contained' onPress={handleSave} style={styles.button}>
            Add Project
          </Button>
        </View>
      )}

      <ScrollView style={{ marginTop: 20 }}>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectContainer}>
            <Text style={styles.projectTitle}>{project.projectTitle}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            {project.link ? <Text style={styles.projectLink}>Link: {project.link}</Text> : null}
            {project.github ? <Text style={styles.projectGithub}>GitHub: {project.github}</Text> : null}
            <Button mode="outlined" onPress={() => handleRemove(index)} style={styles.removeButton}>
              Remove
            </Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ResumeProjectData;

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
  projectContainer: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  projectDescription: {
    marginTop: 5,
    fontSize: 16,
  },
  projectLink: {
    marginTop: 5,
    fontSize: 16,
    color: "#0000ff",
  },
  projectGithub: {
    marginTop: 5,
    fontSize: 16,
    color: "#0000ff",
  },
  removeButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});
