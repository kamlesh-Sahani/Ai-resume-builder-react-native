import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform
} from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const { width } = Dimensions.get("window");
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
      <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/ai_logo.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome!</Text>
        <Text style={styles.text}>
          to <Text style={styles.bold}>Crex</Text>
        </Text>
      </View>

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(pass) => setPassword(pass)}
        style={styles.input}
        mode="outlined"
        secureTextEntry // Optionally add this to hide the password input
      />

      <TouchableOpacity>
        <Button mode="contained" style={styles.btn}>
          Login
        </Button>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.simpleText}>I forgot my password</Text>
      </TouchableOpacity>



      <View style={styles.footer}>
        <TouchableOpacity>
          <Button mode="outlined" icon={"google"} style={styles.provider}>
            Sign in with google
          </Button>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button mode="outlined" icon={"github"} style={styles.provider}>
            Sign in with github
          </Button>
        </TouchableOpacity>


        <Text style={styles.linkText}>Don't have an account? <Text style={styles.link}>Register</Text></Text>
      </View>
    </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#fff',
    flex:1,
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  image: {
    width: 210,
    resizeMode: "contain",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor:'#fff'
  },
  text: {
    fontSize: 38,
  },
  bold: {
    color: "#017335",
    fontWeight: "900",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20, // Adjust spacing between text and input fields
  },
  input: {
    width: width * 0.87, // Full width input
    marginBottom: 15, // Space between input fields
  },
  btn: {
    width: width * 0.87,
    backgroundColor: "#017335",
    padding: 4,
    borderRadius: 5,
  },
  simpleText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
  },
  footer: {
    gap: 10,
    marginTop: 20,
  },
  provider: {
    width: width * 0.87,
    borderRadius: 5,
    fontSize: 40,
    backgroundColor:'#fff',
    color:'#000'
  },
  linkText:{
    textAlign:'center',
    fontWeight:'600',
    color:'#000',
    marginTop:20,
    fontSize:15
  },
  link:{
    fontSize:20,
    color: "#017335",
  }

});
