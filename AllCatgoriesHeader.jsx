import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const AllCatgoriesHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>All Catgories</Text>
      <TouchableOpacity>
      <Image source={require('../../Assets/Icon/false.png')} style={styles.Image}/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    Image:{
        width:25,
        height:25,
        marginTop:9
    },
    container:{
        flexDirection:"row",
        margin:20
    },
    test:{
        fontSize:30,
        fontWeight:700,
        width:"90%"


    }
})
export default AllCatgoriesHeader