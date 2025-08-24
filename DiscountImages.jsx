import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import BottumHeader from './BottumHeader'

const Discountimages = () => {
    const route = useRoute()
    const{Discount} = route.params
  return (
    <View>
      <Image source={{uri:Discount.url}} style={styles.images}/>
      <View style={{backgroundColor:"white",padding:15,shadowColor:"black",elevation:20,marginTop:30}}>
        <BottumHeader />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    images:{
        width:340,
        height:550,
        resizeMode:"cover",
        margin:10,
        borderRadius:5
    }
})
export default Discountimages