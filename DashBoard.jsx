import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Component/Header'
import Announcement from '../../Component/Announcement'
import CircleImage from '../../Component/CircleImage'
import ShoppingImage from '../../Component/ShoppingImage'
import NewItem from './NewItem'
import MostPopular from './MostPopular'
import Categories from './Categories'
import Categories2 from './Categories2'
import FlashSale from './FlashSale'
import TopProduct from './TopProduct'
import JustForYou from './JustForYou'
import BottumHeader from './BottumHeader'

const DashBoard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <ScrollView>
        <Header />
        <Announcement />
        <Text style={styles.recentview}>Recently Viewed</Text>
        <CircleImage />
        <ShoppingImage />
        <NewItem />
        <MostPopular />
        <Categories />
        <Categories2 />
        <FlashSale />
        <Text style={styles.recentview}>Top Product</Text>
        <TopProduct />
        <Text style={styles.recentview}>Just For You</Text>
        <JustForYou />
      </ScrollView>

        <View style={{backgroundColor:"white",padding:15,shadowColor:"black",elevation:20}}>
        <BottumHeader />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recentview: {
    fontSize: 25,
    fontWeight: 700,
    margin: 10,
  }
})
export default DashBoard

