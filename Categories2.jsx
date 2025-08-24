import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Categories2Images } from '../../Utils/DummyData'
import { } from 'react-native-gesture-handler'

const Categories2 = () => {
    return (
        
        <View style={{flexDirection:"row",margin:10,width:"97%"}}>



            <View style={styles.container}>
                <FlatList
                    data={Categories2Images}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={{ uri: item.url }} style={styles.images} />
                        </View>
                    }
                    numColumns={2}
                />
                <Text style={{textAlign:"center"}}>Bags</Text>
            </View>


            <View style={styles.container}>
                <FlatList
                    data={Categories2Images}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={{ uri: item.url }} style={styles.images} />
                        </View>
                    }
                    numColumns={2}
                />
                <Text style={{textAlign:"center"}}>T - Shirt</Text>

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
        flex: 1
    }
})
export default Categories2;