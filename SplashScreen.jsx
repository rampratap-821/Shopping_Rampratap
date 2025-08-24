import { View, Text,StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LOGGIN } from '../../navigation/NavigationString'
import { Images } from '../../Utils/Images'
import { thems } from '../../Utils/Colors'

const SplashScreen = () => {
const navigation = useNavigation()
  useEffect(()=>{
setTimeout(()=>{
  navigation.navigate(LOGGIN)
   },3000)
  })
  return (
    <View style={styles.SplashScreenBackgroun}>
      <Image source={Images[0].shopping} style={styles.image}/>
      <Text style={styles.test}>welcome to shopping</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  SplashScreenBackgroun:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  test:{
fontSize:20,
color:thems.green,
marginTop:20
  },
  image:{
    width:200,
    height:200,
    borderRadius:100
  }
})
export default SplashScreen