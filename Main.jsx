import { StyleSheet } from 'react-native'
import React from 'react'
import Login from './screens/Login' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Footer from './components/Footer';
import Profile from './screens/Profile';
import ResumeOption from './screens/ResumeOption';
import ResumeForm from './screens/ResumeForm';
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='profile' component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name='resumeOption' component={ResumeOption} options={{headerShown:false}}/>
        <Stack.Screen name='resumeForm' component={ResumeForm} options={{headerShown:false}}/>
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})