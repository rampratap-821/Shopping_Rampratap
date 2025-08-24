import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../Utils/Images'
import { thems } from '../../Utils/Colors'
import { NewItemImage } from '../../Utils/DummyData'
import { useNavigation } from '@react-navigation/native'
import { CART2 } from '../../navigation/NavigationString'

const NewItem = () => {
    const navigation = useNavigation()
    const [show, setShow] = useState(false)
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.NewItem}>New Item</Text>
                <Text style={styles.SeeAll}>See All</Text>
                <TouchableOpacity
                    style={{ backgroundColor: thems.green, width: 40, height: 40, borderRadius: 20, marginBottom: 8 }}
                    onPress={() => navigation.navigate(CART2)}
                >
                    <Image source={Images[7].goback} style={styles.image} />
                </TouchableOpacity>
            </View>

            <View style={{ width: "96%", paddingLeft: 5 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        NewItemImage.map((item) =>
                            <View style={styles.card} key={item.id}>
                                <TouchableOpacity onPress={() => setShow(true)}>
                                    <Image source={{ uri: item.url }} style={styles.image2} />
                                </TouchableOpacity>

                                <Text style={styles.description}>{item.description}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>

            <Modal
                transparent={true}
                visible={show}
                animationType='slide'
            >
                <View 
                style={{  marginTop: 150,padding:20, margin: 20, borderRadius: 20, }}>
                    
                    <View style={{ backgroundColor: "#73d0e0ff",padding:50,marginTop:50 }}>
                        <Text style={{ textAlign: "center", color: "red", fontSize: 30, marginTop: 20 }}>Pala</Text>
                        <View style={{paddingHorizontal:30,paddingBottom:20}}>
                            <Button title=' clearPala' onPress={() => setShow(false)} />
                        </View>
                    </View>
                    <Image source={require('../../Assets/Icon/shopping2.png')}
                        style={{ backgroundColor: "white", borderRadius: 100,position:"absolute", marginLeft:90,}} />
                </View>

            </Modal>

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
        fontWeight: "700",
        color: thems.blue,
        marginTop: 6
    },
    SeeAll: {
        paddingTop: 8,
        fontSize: 18,
        fontWeight: "700",
        color: thems.blue
    },
    image2: {
        width: 130,
        height: 200,
        borderRadius: 5,
        resizeMode: "cover",
        marginBottom: 6
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 8,
        width: 140,
        alignItems: "center",

    },
    description: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "500",
        marginBottom: 4
    },
    price: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "700",
        color: "green"
    }
})
export default NewItem
