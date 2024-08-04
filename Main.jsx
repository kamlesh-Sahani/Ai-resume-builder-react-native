import { StyleSheet } from 'react-native'
import React from 'react'
import Login from './screens/Login' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='welcome' component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})