import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import {useNavigation} from '@react-navigation/native'
const { width } = Dimensions.get("window");

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require("../assets/resume.png")} style={styles.image} />
        <Text style={styles.text}>Welcome!</Text>
        <Text style={styles.text}>
          to <Text style={styles.bold}>Crex</Text>
        </Text>

        <View style={styles.textContainer}>
          <View style={styles.points}>
            <Image
              source={require("../assets/check.png")}
              style={styles.check}
            />
            <Text style={styles.pointText}>
              Choose from modern, impactful designs
            </Text>
          </View>
          <View style={styles.points}>
            <Image
              source={require("../assets/check.png")}
              style={styles.check}
            />
            <Text style={styles.pointText}>
              Tailor and enhance your resume with smart suggestions
            </Text>
          </View>
          <View style={styles.points}>
            <Image
              source={require("../assets/check.png")}
              style={styles.check}
            />
            <Text style={styles.pointText}>
              Download in PDF, DOCX, and more
            </Text>
          </View>
          <View style={styles.points}>
            <Image
              source={require("../assets/check.png")}
              style={styles.check}
            />
            <Text style={styles.pointText}>
              Ensure your resume passes through Applicant Tracking Systems with
              ease.
            </Text>
          </View>
        </View>

        <Button
          mode="contained"
          style={styles.btn}
          labelStyle={styles.btnLabel}
          onPress={()=>navigation.navigate('login')}
        >
          Get started
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 10,
    height: 300,
    width: width * 0.67,
    marginTop: 20,
  },
  text: {
    fontSize: 38,
  },
  bold: {
    color: "#017335",
    fontWeight: "900",
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  points: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkMark: {
    fontSize: 30,
    color: "#017335",
  },
  pointText: {
    fontSize: 15,
    marginLeft: 10,
  },
  btn: {
    width: width * 0.87,
    backgroundColor: "#017335",
    borderRadius: 5,
    marginTop:20
  },
  btnLabel: {
    color: "#fff",
  },
  check: {
    width: 20,
    height: 20,
  },
});

export default Welcome;
