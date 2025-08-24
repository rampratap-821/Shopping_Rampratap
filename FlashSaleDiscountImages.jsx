import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { JustForYouData } from '../../Utils/DummyData'
import { thems } from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
import { DISCOUNTIMAGES } from '../../navigation/NavigationString'


const FlashSaleDiscountImages = () => {
    const navigation = useNavigation()
    const [count, setCount] = useState("10%")
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <ImageBackground source={require('../../Assets/Image/Discount.jpg')} style={styles.images}>
                <View style={styles.testContainer}>
                    <Text style={styles.test}>All</Text>

                    <TouchableOpacity onPress={() => setCount("10%")}>
                        <Text style={styles.test}>10%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCount("20%")}>
                        <Text style={styles.test}>20%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCount("30%")}>
                        <Text style={styles.test}>30%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCount("40%")}>
                        <Text style={styles.test}>40%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCount("50%")}>
                        <Text style={styles.test}>50%</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground >
            <Text style={{ fontSize: 30, fontWeight: 700, margin: 10 }}>{count} Discount</Text>
            <FlatList
                data={JustForYouData}
                renderItem={({ item }) =>
                    <View style={{ width: "50%", padding: 10, paddingRight: 10, marginTop: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate(DISCOUNTIMAGES, { Discount: item })}>
                            <ImageBackground source={{ uri: item.url }} style={styles.DiscountImages}>
                                <Text style={styles.ImageBackgroundTest}>{count}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.price}>{item.price}</Text>

                    </View>

                }
                numColumns={2}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    images: {
        width: 350,
        height: 225,
        resizeMode: "cover",
    },
    test: {
        color: "blue",
        fontSize: 22,
        fontWeight: 700

    },
    testContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 180,
        margin: 10,
    },
    DiscountImages: {
        width: 158,
        height: 170,
        resizeMode: "cover"
    },
    description: {
        textAlign: "center",
        width: "87%"
    },
    price: {
        paddingLeft: 10,
        color: "green",
        fontWeight: 700
    },
    ImageBackgroundTest: {
        marginLeft: 109,
        backgroundColor: thems.green,
        width: "30%",
        textAlign: "center",
        padding: 7,
        borderRadius: 5,
        fontWeight: 700,
        color: "white"
    },


  
})
export default FlashSaleDiscountImages




