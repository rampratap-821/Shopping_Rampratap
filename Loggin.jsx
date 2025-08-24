import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../Utils/Images'
import { thems } from '../../Utils/Colors'
import { DASHBAORD, DRAWERNAVIGATION } from '../../navigation/NavigationString'

const Loggin = ({ navigation }) => {
    const[show,setShow] = useState(false)
    return (
        <ScrollView>
            <View style={styles.SplashScreenBackgroun}>
                <View style={{ alignSelf: "center", marginTop: 100, }}>
                    <Image source={Images[1].shopping2} style={styles.image} />
                    <Text style={{ fontSize: 17, fontWeight: "900", }}>Login Here</Text>
                </View>



                <TextInput style={styles.input} placeholderTextColor={"#666"} placeholder='Enter The Number' />
                <View style={styles.eye}>
                    <TextInput
                        placeholder='Enter The Password'
                        placeholderTextColor={"#666"} 
                        secureTextEntry={!show}
                        style={styles.placeholder} />
                    <TouchableOpacity onPress={()=>setShow(!show)} style={{paddingTop:5}}>
                        
                        <Image source= {
                            show?
                            Images[3].eye2
                            :Images[2].eye
                        }
                         style={{ width: 25, height: 25, }} />
                        
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={{
                    backgroundColor: thems.green,
                    padding: 12,
                    marginTop: 15,
                    margin: 10,
                    alignSelf: "center",
                    width: "94%",
                    borderRadius: 5
                }}
                    onPress={() => navigation.navigate(DRAWERNAVIGATION)}
                >
                    <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "900", color: "#e8f0e8ff" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    SplashScreenBackgroun: {
        flex: 1,
        marginTop: 70,
        justifyContent: "center",
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: ""
    },
    input: {
        width: "94%",
        alignSelf: "center",
        marginTop: 20,
        paddingLeft: 10,
        borderWidth: 0.5,
        padding: 13,
        borderRadius: 5,
        backgroundColor:"white"
    },
    eye: {
        flexDirection: "row",
        borderWidth: 0.5,
        marginTop: 20,
        margin: 10,
        borderRadius: 5,
        padding: 2,
        paddingLeft: 5,
        backgroundColor:"white"
    },
    placeholder: {
        width: "90%"
    }
})
export default Loggin