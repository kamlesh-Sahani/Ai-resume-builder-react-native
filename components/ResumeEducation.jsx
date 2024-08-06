import React, { useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const ResumeEducation = ({ setEducation }) => {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startDate,setStarDate] = useState('');
  const [endDate,setEndDate] = useState('');
const [cgpa,setCgpa]=useState('');
const [location,setLocation] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSave = () => {
    setEducation({ degree, institution, startDate,endDate ,cgpa,location});
  };

  useEffect(()=>{
    handleSave();
  },[degree,institution,startDate,endDate,cgpa,location])

  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity style={{ gap: 1 }} onPress={() => setShowInput((prev) => !prev)}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.heading}>Education</Text>
          <Icon name={showInput ? "keyboard-arrow-down" : "keyboard-arrow-right"} size={30} />
        </View>
        <Text style={styles.subHeading}>
          Add your educational background
        </Text>
      </TouchableOpacity>

      {showInput && (
        <View style={{ gap: 1, marginTop: 10, alignItems: "center" }}>
          <TextInput
            label="Degree"
            value={degree}
            onChangeText={(text) => setDegree(text)}
            style={styles.input}
            mode="outlined"
            placeholder='eg. Bachelor of Computer Applications'
          />
          <TextInput
            label="Institution"
            value={institution}
            onChangeText={(text) => setInstitution(text)}
            style={styles.input}
            mode="outlined"
            placeholder='eg. Don Bosco Institute Of Technology'
          />
             <TextInput
            label="Location"
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={styles.input}
            mode="outlined"                                   
            placeholder='eg. New Delhi'
          />
          <TextInput
            label="Start Date"
            value={startDate}
            onChangeText={(text) => setStarDate(text)}
            style={styles.input}
            mode="outlined"
            placeholder='eg. july 2025'
          />
          <TextInput
            label="End Date"
            value={endDate}
            onChangeText={(text) => setEndDate(text)}
            style={styles.input}
            mode="outlined"
            placeholder='eg. july 2029'
          />
            <TextInput
            label="CGPA optional"
            value={cgpa}
            onChangeText={(text) => setCgpa(text)}
            style={styles.input}
            mode="outlined"
            placeholder='eg. 8.5/10'
          />
  
        </View>
      )}
    </View>
  );
};

export default ResumeEducation;

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
});
