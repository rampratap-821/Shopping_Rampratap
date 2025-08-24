import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { BottumHeaderImages } from '../../Utils/Images'
import { thems } from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
import { ALLCATGORIES } from '../../navigation/NavigationString'

const BottumHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, }}>
      <Image source={BottumHeaderImages[0].home} style={{ width: 30, height: 30 }} />
      <Image source={BottumHeaderImages[1].heart} style={styles.images} />
      <Image source={BottumHeaderImages[2].copy} style={styles.images} />
      <TouchableOpacity onPress={()=>navigation.navigate(ALLCATGORIES)}>
        <Image source={BottumHeaderImages[3].profile} style={styles.images} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  images: {
    width: 30,
    height: 30,
    tintColor: thems.green,

  }

})
export default BottumHeader