import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Images } from '../../Utils/Images'
import { thems } from '../../Utils/Colors'
import { MostPopular, NewItemImage } from '../../Utils/DummyData'

const NewItem = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.NewItem}>Most Popular</Text>
                <Text style={styles.SeeAll}>See All</Text>
                <TouchableOpacity style={{ backgroundColor: thems.green, width: 40, height: 40, borderRadius: 20, marginBottom: 8, }}>
                    <Image source={Images[7].goback} style={styles.image} />
                </TouchableOpacity>
            </View>

          <View style={{width:"96%"}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      
                {
                    MostPopular.map((item) =>
                        <View style={styles.map}>
                        <TouchableOpacity style={styles.imagebg}>
                            <Image source={{ uri: item.url }} style={styles.image2} />
                            <Text style={[styles.description,{color:"green"}]}>{item.price} 🚴‍♂️</Text>
                        </TouchableOpacity>
                        </View>
                    )
                }
                </ScrollView>
          </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        margin: 10
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
        fontWeight: 700,
        color: thems.blue
    },
    SeeAll: {
        paddingTop: 8,
        fontSize: 18,
        fontWeight: 700,
        color: thems.blue
    },
    image2: {
        width: 100,
        height: 150,
        margin:4,
        resizeMode:"cover",
        borderRadius:5
    },
    imagebg:{
    },
   map: {
flexDirection:"row",
marginHorizontal:4,
// backgroundColor:"red",

    },
    description:{
        fontSize:12,
        width:"50%",
        // backgroundColor:"red",
        margin:2,
        textAlign:"center",
        fontWeight:700
    },
    price:{
        alignSelf:"center",
        backgroundColor:"green",
        fontWeight:700,
        color:"green",
        // textAlign:"center"s
    }
})
export default NewItem