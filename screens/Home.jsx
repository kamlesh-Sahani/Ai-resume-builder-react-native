import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Portal, Dialog, TextInput } from "react-native-paper";
import {useNavigation} from '@react-navigation/native'

const { width } = Dimensions.get("window");

const HistoryItem = ({ image, title, subtitle, date }) => {

  return (
    <View style={styles.history}>
      <View style={styles.historyContent}>
        <Image source={image} style={styles.resumeHistory} />
        <View style={styles.historyText}>
          <Text style={styles.historyTitle}>{title}</Text>
          <Text style={styles.historySubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Text style={styles.historyDate}>{date}</Text>
    </View>
  );
};

const Home = () => {
  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const navigation = useNavigation();

  const createResumeHandler=()=>{
    if(!resumeTitle){
      return;
    }
    hideDialog();
    navigation.navigate('resumeForm');
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{ backgroundColor: "#fff", borderRadius: 4 }}
          >
            <Dialog.Title style={{fontWeight:'600'}}>Create New Resume</Dialog.Title>
            <Dialog.Content>
              <Text style={{ fontSize: 14, color: "#333" }}>
                Add the title of resume
              </Text>

              <TextInput
                label="Resume title"
                value={resumeTitle}
                onChangeText={(text) => setResumeTitle(text)}
                style={styles.input}
                mode="outlined"
              />
            </Dialog.Content>

            <Dialog.Actions>
              <Button onPress={() => hideDialog()}>
                <Text style={{ fontWeight: "600", color: "#000" }}>
                  Canncel
                </Text>
              </Button>
              <Button onPress={createResumeHandler} style={styles.btn}>
                <Text style={{ color: "#fff" }}>Create</Text>{" "}
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <View style={styles.header}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profile}
          />
          <Text>k</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Text style={styles.heading}>Resume</Text>
            <Text style={styles.smallHeading}>See all</Text>
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.btn}
              icon="folder"
              onPress={() => setVisible((prev) => !prev)}
            >
              New Resume
            </Button>
          </TouchableOpacity>

          <View style={styles.historyContainer}>
            <Text style={styles.heading}>My Resumes</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.histories}>
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
                <HistoryItem
                  image={require("../assets/resumeImg.webp")}
                  title="Graphics Designer"
                  subtitle="Professional"
                  date="5 Aug 2025"
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    padding: 10,
  },
  profile: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  main: {
    flex: 1,
  },
  mainHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 19,
    color: "#000",
    fontWeight: "400",
  },
  smallHeading: {
    color: "#017335",
    fontWeight: "600",
    fontSize: 15,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  btn: {
    width: width * 0.96,
    backgroundColor: "#017335",
    padding: 4,
    borderRadius: 5,
    height: 50,
  },
  historyContainer: {
    flex: 1,
    marginTop: 20,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  histories: {
    flex: 1,
    gap: 5,
    marginTop: 10,
    justifyContent: "center",
  },
  history: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    padding: 5,
    backgroundColor: "#fff",
    shadowColor: "#eee",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10,
    width: width * 0.95,
  },
  historyContent: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  historyText: {
    gap: 3,
  },
  historyTitle: {
    fontWeight: "400",
    fontSize: 18,
  },
  historySubtitle: {
    fontSize: 15,
    color: "#333",
  },
  historyDate: {
    fontSize: 15,
    color: "#333",
  },
  resumeHistory: {
    width: 80,
    height: 60,
    borderRadius: 4,
  },
  input: {
    marginTop: 15, // Space between input fields
    backgroundColor: "transparent",
  },
  btn: {
    backgroundColor: "#017335",
    padding: 4,
    borderRadius: 5,
    color: "#fff",
  },
});
