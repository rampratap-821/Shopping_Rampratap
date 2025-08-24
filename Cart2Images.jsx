import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Cart2Data } from '../../Utils/DummyData'
import { thems } from '../../Utils/Colors'

const Cart2Images = () => {
    const [cartItems, setCartItems] = useState(
        Cart2Data.map(item => ({ ...item, quantity: 1 })) // हर item के लिए default quantity = 1
 );

    // 🗑 Delete handler
    // const handleDelete = (id) => {
    //     setCartItems(prev => prev.filter(item => item.id !== id));
    // };

   const henderError = (id) => {
    const deleteId = 4;
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
}




    // ➕ Increment handler
    const handleIncrease = (id) => {
        setCartItems(rana =>
            rana.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // ➖ Decrement handler
    const handleDecrease = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <View>
            {cartItems.map((item) =>
                <View key={item.id} style={styles.container}>
                    <ImageBackground source={{ uri: item.image }} style={styles.images} >
                        <TouchableOpacity
                            style={styles.iconBackground}
                            // onPress={() => handleDelete(item.id)}
                            onPress={()=>henderError(item.id)}
                        >
                            <Image source={{ uri: item.deleteIcon }} style={styles.icon} />
                        </TouchableOpacity>
                    </ImageBackground>

                    <View style={styles.psSize}>
                        <Text style={styles.pala}>{item.description}</Text>
                        <Text style={styles.size}>{item.male}</Text>

                        <View style={styles.row}>
                            <Text style={styles.price}>{item.price}</Text>

                            <View style={styles.qtyContainer}>
                                <TouchableOpacity onPress={() => handleDecrease(item.id)}>
                                    <Image source={{ uri: item.minusIcon }} style={styles.minusIcon} />
                                </TouchableOpacity>

                                <Text style={styles.num}>{item.quantity}</Text>

                                <TouchableOpacity onPress={() => handleIncrease(item.id)}>
                                    <Image source={{ uri: item.plusIcon }} style={styles.minusIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    images: {
        width: 130,
        height: 110,
        margin: 10,
        borderRadius: 10
    },
    icon: {
        width: 25,
        height: 25,
        margin: 7,
        tintColor: thems.green
    },
    container: {
        flexDirection: "row",
        width: "100%",   // full width so layout stable रहे
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 5
    },
    size: {
        fontSize: 18,
        fontWeight: "500",
        color: "gray"
    },
    pala: {
        color: "gray",
        fontWeight: "700",
        paddingTop: 10
    },
    iconBackground: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 50,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    price: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 14,
        width: "40%"
    },
    minusIcon: {
        width: 30,
        height: 30,
        tintColor: "#7eabc0ff"
    },
    num: {
        fontSize: 20,
        fontWeight: "600",
        marginHorizontal: 10,
        textAlign: "center"
    },
    psSize: {
        flex: 1,
        justifyContent: "center",
        paddingRight: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        justifyContent: "space-between"
    },
    qtyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10
    }
})

export default Cart2Images
