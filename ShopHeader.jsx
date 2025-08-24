import { View, Text, TextInput,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconImages } from '../../Utils/IconImages'
import { thems } from '../../Utils/Colors'

const ShopHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ShopHeader}>Shop</Text>
      <View style={styles.placeholderBackground}>
      <TextInput
      style={styles.search}
      placeholder='Search'
      />
      <TouchableOpacity>
      <Image source={IconImages[0].camera} style={styles.images}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    images:{
        width:22,
        height:22,
        tintColor:thems.green,
        marginTop:10
    },
    container:{
        flexDirection:"row",
        marginTop:20
    },
    ShopHeader:{
        fontSize:35,
        fontWeight:"700",
        width:"30%",
        paddingLeft:10
    },
    search:{
        width:"80%",
        fontSize:18,
        paddingLeft:15
    },
    placeholderBackground:{
        backgroundColor:"#ebf1fcff",
        flexDirection:"row",
        borderRadius:20,
        marginRight:10,
        width:"67%"
    }
})
export default ShopHeader