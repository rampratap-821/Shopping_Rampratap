import { View, Text, ScrollView,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import JustForYou from './JustForYou'
import BottumHeader from './BottumHeader'
import FlashSaleDiscountImages from './FlashSaleDiscountImages'

const Copy = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
        <FlashSaleDiscountImages/>
        </ScrollView>
      <View style={{backgroundColor:"white",padding:15,shadowColor:"black",elevation:20}}>
        <BottumHeader />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})
export default Copy