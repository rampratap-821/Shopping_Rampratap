import { View, Text,StyleSheet,StatusBar, ScrollView  } from 'react-native'
import React from 'react'
import Announcement from '../../Component/Announcement'
import Cart2Images from './Cart2Images'
import BottumHeader from './BottumHeader'

const Cart2 = () => {
  return (
    <View style={styles.container}>
              <StatusBar backgroundColor={"white"}/>
              <ScrollView>
      <Text style={styles.test}>Cart 2</Text>
      <Announcement/>
      <Cart2Images/>
      </ScrollView>
      <BottumHeader/>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
},
test:{
    fontSize:30,
    margin:10,
    paddingLeft:10,
    fontWeight:700
}
})
export default Cart2