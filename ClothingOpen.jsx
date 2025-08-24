

import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ClothingBrands, ClothingOpenData } from '../../Utils/DummyData'
import BottumHeader from './BottumHeader'

const ClothingOpen = () => {
    const [show, setShow] = useState(null)   // null by default

    const handlePress = (id) => {
        if (show === id) {
            setShow(null)   // agar same item pe dobara press hua to close kar do
        } else {
            setShow(id)     // warna usi item ko open kar do
        }
    }

    return (
        <View style={styles.container}>
            {
                ClothingOpenData.map((item) =>
                    <View style={styles.card} key={item.id}>

                        {/* Top Row (Image + Arrow) */}
                        <View style={styles.row}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.title}>{item.name}</Text>

                            <TouchableOpacity onPress={() => handlePress(item.id)}>
                                {
                                    show === item.id ?
                                        <Image source={{ uri: item.images2 }} style={styles.arrow} />  // Up arrow
                                        :
                                        <Image source={{ uri: item.images3 }} style={styles.arrow} />  // Down arrow
                                }
                            </TouchableOpacity>
                        </View>
                        {
                            show === item.id && (
                                <View style={styles.expandBox}>
                                    {
                                        ClothingBrands.map((item) =>
                                            <View style={styles.BrandBackground} >

                                                <Text style={styles.brandName}>{item.name}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            )
                        }



                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginHorizontal: 7
    },
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: "black",
        elevation: 5,
        padding: 8
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10
    },
    bigImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginTop: 10
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: "700"
    },
    desc: {
        marginTop: 10,
        fontSize: 14,
        color: "gray"
    },
    price: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "bold",
        color: "green"
    },
    arrow: {
        width: 22,
        height: 22,
        tintColor: "black"
    },
    expandBox: {
        marginTop: 10,
        borderTopWidth: 2,
        borderTopColor: "rgba(219, 219, 212, 1)",
        flexDirection:"row",
    
        flexWrap:"wrap",
        width:"100%",
        
        

    },
    BrandBackground:{
        backgroundColor:"white",
        margin:5,
        padding:15,
        width:"46%",
        borderWidth:1,
        borderColor:"rgba(224, 170, 70, 1)",
        borderRadius:10,
        marginTop:10
    },
    brandName:{
        textAlign:"center",
        fontWeight:700,
        color:"red"
    }
    
})

export default ClothingOpen;





