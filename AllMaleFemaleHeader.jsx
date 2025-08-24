import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const AllMaleFemaleHeader = () => {
    const [show, setShow] = useState(0)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShow(1)}>
                {
                    show === 1 ?
                        <Button title='All' />
                        :
                        <Text style={styles.test}>All</Text>
                }


            </TouchableOpacity>

           
            <TouchableOpacity onPress={() => setShow(2)}>
                {
                    show === 2 ?
                        <Button title='Female' />
                        :
                        <Text style={styles.test}>Female</Text>
                }


            </TouchableOpacity>




             <TouchableOpacity onPress={() => setShow(3)}>
                {
                    show === 3 ?
                        <Button title='Male' />
                        :
                        <Text style={styles.test}>Male</Text>
                }


            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
        paddingHorizontal: 30
    },
    test: {
        fontSize: 24,
        fontWeight: 600,
        color: "gray"
    }
})
export default AllMaleFemaleHeader