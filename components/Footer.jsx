import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/FontAwesome6'
import {useNavigation} from '@react-navigation/native'
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#fff',
        padding:20  
    }}>
     <TouchableOpacity>
        <Icon name='home' size={30} color={'#017335'} onPress={()=>navigation.navigate('home')}/>
     </TouchableOpacity>
     <TouchableOpacity>
        <FIcon name='user' size={30} color={'#017335'} onPress={()=>navigation.navigate('profile')}/>
     </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})