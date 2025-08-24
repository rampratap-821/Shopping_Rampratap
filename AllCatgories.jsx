import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import AllCatgoriesHeader from './AllCatgoriesHeader'
import AllMaleFemaleHeader from './AllMaleFemaleHeader'
import ClothingOpen from './ClothingOpen'

const AllCatgories = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <AllCatgoriesHeader/>
      <AllMaleFemaleHeader/>
      <ClothingOpen/>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  
    container:{
        flex:1,
        backgroundColor:"white",
    }
})
export default AllCatgories