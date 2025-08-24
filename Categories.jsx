import { View, Text, Image, StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import {CategoriesClothesImages } from '../../Utils/DummyData'
import { thems } from '../../Utils/Colors'
import { Images } from '../../Utils/Images'

const Categories = () => {
    return (

<View>

 <View style={styles.container2}>
                <Text style={styles.NewItem}>Categori</Text>
                <Text style={styles.SeeAll}>See All</Text>
                <TouchableOpacity style={{ backgroundColor: thems.green, width: 40, height: 40, borderRadius: 20, marginBottom: 8 }}>
                    <Image source={Images[7].goback} style={styles.image} />
                </TouchableOpacity>
            </View>





        <View style={{flexDirection:"row",width:"97%",margin:10}}>



            <View style={styles.container}>
                <FlatList
                    data={CategoriesClothesImages}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={{ uri: item.url }} style={styles.images} />
                        </View>
                    }
                    numColumns={2}
                />
                <Text style={{textAlign:"center"}}>Clothes</Text>
            </View>


            <View style={styles.container}>
                <FlatList
                    data={CategoriesClothesImages}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={{ uri: item.url }} style={styles.images} />
                        </View>
                    }
                    numColumns={2}
                />
                <Text style={{textAlign:"center"}}> Shoes</Text>

            </View>





        </View>

</View>

    )
}
const styles = StyleSheet.create({
    images: {
        width: 74,
        height: 80,
        resizeMode: "cover",
        borderRadius: 5,
        margin: 5,

    },
    container: {
        flex: 1,
    
    },
    image: {
        width: 30,
        height: 30,
        margin: 4,
        tintColor: "white",
    },
    NewItem: {
        width: "70%",
        fontSize: 25,
        fontWeight: "700",
        color: thems.blue,
        marginTop:6
    },
    SeeAll: {
        paddingTop: 8,
        fontSize: 18,
        fontWeight: "700",
        color: thems.blue
},
    container2: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "space-between",
        marginHorizontal:10 
}})
export default Categories;