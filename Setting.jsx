import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import { Images } from '../../Utils/Images'
import { ImageBackground } from 'react-native/types_generated/index'
import BottumHeader from './BottumHeader'

const Setting = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"}/>
            <Text style={styles.Setting}>Settings</Text>
            <Text style={styles.test}>Your Profile</Text>




<View style={styles.ImageBackground}>
                <View>
                    <Image source={Images[4].profile} style={styles.images} />
                </View>
            </View>




            <View style={styles.ImageBackground2}>
                <View>
                    <Image source={require('../../Assets/Icon/pen.png')} style={styles.images2} />
                </View>
            </View>



            







            <View style={styles.TextInput2}>
                <TextInput placeholder='Enter the Name' style={{ fontSize: 15 }} />
            </View>

            <View style={styles.TextInput}>
                <TextInput placeholder='Enter the Email' style={{ fontSize: 15 }} />
            </View>

            <View style={styles.TextInput}>
                <TextInput placeholder='Enter the Password' style={{ fontSize: 15 }} secureTextEntry={true} />
            </View>
            <TouchableOpacity
                style={{ justifyContent: "flex-end", padding: 13, backgroundColor: "#68c3f8ff", marginTop: 295, borderRadius: 10,margin:10 }}>
                <Text style={{ textAlign: "center", color: "white", fontWeight: 700, fontSize: 17 }}>save changes</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"

    },
    Setting: {
        fontSize: 30,
        fontWeight: 700,
        marginTop:15,
        marginLeft:15
    },
    test: {
        fontSize: 15,
        margin: 2,
        fontWeight: 700,
        color: "gray",
        marginLeft:15


    },
    images: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin:4.5

    },
    TextInput: {
        backgroundColor: "#e1eff3ff",
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 20,
        marginHorizontal: 10

    },
    TextInput2: {
        backgroundColor: "#e1eff3ff",
        padding: 5,
        borderRadius: 10,
        marginTop: 80,
        paddingLeft: 20,
        marginHorizontal: 10
    },
    ImageBackground:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:"white",
        shadowColor:"black",
        elevation:10,
        position:"absolute",
        marginTop:80,
        marginLeft:10
    },
     ImageBackground2:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:"white",
        shadowColor:"black",
        elevation:10,
        marginLeft:58
    },
     images2: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        margin:2.5

    },
})
export default Setting