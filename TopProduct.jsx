import { View, Text,Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProfileImage } from '../../Utils/DummyData'
import { thems } from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
import { PROFILEIMAGELIST } from '../navigation/NavigationString'

const CircleImage = () => {
  return (
    <View style={{flexDirection:"row",width:"96%",paddingLeft:10}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        ProfileImage.map((item)=>
        <TouchableOpacity style={styles.imageBackground}>
          <Image source={{uri:item.url}} style={styles.image}/>
        </TouchableOpacity>
        )
      }
      </ScrollView>
    </View>
  )
}
const  styles = StyleSheet.create({
  image:{
width:50,
height:50,
borderRadius:25,
margin:2.5,
resizeMode:"cover"
  },
  imageBackground:{
    backgroundColor:thems.green,
    width:55,
    height:55,
    borderRadius:27.5,
    margin:2,
  }
})
export default CircleImage