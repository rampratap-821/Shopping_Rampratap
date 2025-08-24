import { View, Text,Image } from 'react-native'
import React from 'react'

const ShoppingSale = () => {
  return (
    <View>
      <Image source={require('../../Assets/Image/shoppingSale.jpg')}
       style={{width:338,height:180,margin:10,borderRadius:10}}
       />
    </View>
  )
}

export default ShoppingSale