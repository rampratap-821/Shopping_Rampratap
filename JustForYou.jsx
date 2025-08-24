import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { JustForYouData } from '../../Utils/DummyData'

const JustForYou = () => {
    return (
        <View style={{padding:10,}}>
            <FlatList
                data={JustForYouData}
                renderItem={({ item }) =>
                    <View style={{margin:5,width:"48%", }}>
                        <Image source={{ uri: item.url }} style={styles.images} />
                        <Text style>{item.description}</Text>
                        <Text style={styles.test}>{item.price}</Text>
                    </View>
                }
                numColumns={2}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    images: {
        width: 155,
        height: 200,
        resizeMode:"cover",
        borderRadius:10,
       
       
        
    },
     test:{
 color:"green",
 fontWeight:700
    }
})
export default JustForYou