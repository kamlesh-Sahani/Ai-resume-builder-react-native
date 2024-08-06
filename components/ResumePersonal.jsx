import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get("window");

const ResumePersonalData = ({ setPersonalData }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [showInput, setShowInput] = useState(true);

  const handleSave = () => {
    setPersonalData({
      fullName,
      email,
      portfolio,
      github,
      linkedin,
    });
  };

  useEffect(() => {
    handleSave();
  }, [fullName, email, portfolio, github, linkedin]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => setShowInput((prev) => !prev)}>
        <View style={styles.header}>
          <Text style={styles.heading}>Personal Data</Text>
          <Icon name={showInput ? "keyboard-arrow-down" : "keyboard-arrow-right"} size={30} />
        </View>
        <Text style={styles.subHeading}>
          Complete your personal data to make your resume better
        </Text>
      </TouchableOpacity>

      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            mode="outlined"
            placeholder='eg. Kamlesh Sahani'
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Portfolio link optional"
            value={portfolio}
            onChangeText={setPortfolio}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="LinkedIn account optional"
            value={linkedin}
            onChangeText={setLinkedin}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Github account optional"
            value={github}
            onChangeText={setGithub}
            style={styles.input}
            mode="outlined"
          />
        </View>
      )}
    </View>
  );
};

export default ResumePersonalData;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  touchable: {
    gap: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 19,
    fontWeight: "500",
  },
  subHeading: {
    color: "#808080",
    fontSize: 15,
  },
  inputContainer: {
    gap: 1,
    marginTop: 10,
    alignItems: "center",
  },
  input: {
    width: width * 0.87,
    marginBottom: 15,
  },
});
