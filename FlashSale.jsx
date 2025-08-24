import { View, Text,ImageBackground,StyleSheet  } from 'react-native'
import React from 'react'
import { Image } from 'react-native/types_generated/index'
import {  Images3 } from '../../Utils/Images'
import { thems } from '../../Utils/Colors'

const FlashSale = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images3[0].shopping1} style={styles.images}>
<Text style={styles.test}>-20%</Text>
      </ImageBackground>

          <ImageBackground source={Images3[0].shopping1} style={styles.images}>
<Text style={styles.test}>-20%</Text>
      </ImageBackground>

          <ImageBackground source={Images3[0].shopping1} style={styles.images}>
<Text style={styles.test}>-20%</Text>
      </ImageBackground>

          <ImageBackground source={Images3[0].shopping1} style={styles.images}>
<Text style={styles.test}>-20%</Text>
      </ImageBackground>

          <ImageBackground source={Images3[0].shopping1} style={styles.images}>
<Text style={styles.test}>-20%</Text>
      </ImageBackground>

          <ImageBackground source={Images3[0].shopping1} style={styles.images}>
<Text style={styles.test}>-20%</Text>
      </ImageBackground>

      
    </View>
  )
}

const styles = StyleSheet.create({
    images:{
        width:104,
        height:100,
        borderRadius:10,
        margin:5
    },
    test:{
        backgroundColor:thems.green,
        color:"white",
        width:40,
        height:20,
        borderRadius:5,
        marginLeft:60,
        paddingLeft:6,
        fontWeight:700
    },
    container:{
        flexDirection:"row",
        flexWrap:"wrap",
        margin:5
        
    }
})
export default FlashSale