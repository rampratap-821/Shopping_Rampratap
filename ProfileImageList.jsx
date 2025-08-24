import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ProfileImageList = () => {
    const route = useRoute()
    const{Profile} = route.params;
  return (
    <View>
        <Image source={{uri:Profile.url}} style={styles.image}/>
      <Text style={styles.name}>{Profile.name}</Text>
      <Text style={styles.description}>{Profile.description}</Text>
      <Text style={styles.address}> Address - {Profile.address}</Text>


    </View>
  )
}
const styles = StyleSheet.create({
image:{
    resizeMode:"cover",
    width:340,
    height:380,
    borderRadius:10,
    margin:9,
},
name:{
fontSize:30,
textAlign:"center",
color:"green",
fontWeight:700
},
description:{
    fontSize:20,
    color:"gray",
    fontWeight:700,
    margin:10
},
address:{
    marginLeft:10,
    fontSize:20,
    fontWeight:700,
    color:"red",
}
})
export default ProfileImageList