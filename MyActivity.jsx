import { View, Text, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import ShopHeader from './ShopHeader'
import ShoppingSale from './ShoppingSale'
import Categories from './Categories'
import Categories2 from './Categories2'
import CircleImage from './TopProduct'
import NewItem from './NewItem'
import FlashSale from './FlashSale'
import MostPopular from './MostPopular'
import JustForYou from './JustForYou'
import BottumHeader from './BottumHeader'

const MyActivity = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor={"white"} />
            <ScrollView>
            <ShopHeader />
            <ShoppingSale />
            <Categories />
            <Categories2 />
            <Text style={{fontSize:25,fontWeight:700,margin:10}}>Top Product</Text>
            <CircleImage />
            <NewItem/>
            <FlashSale/>
            <MostPopular/>
            <JustForYou/>
            </ScrollView>
              <View style={{backgroundColor:"white",padding:15,shadowColor:"black",elevation:20}}>
        <BottumHeader />
        </View>
        </View>
    )
}

export default MyActivity