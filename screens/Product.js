import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function Product({ route }) {
    const [{product}] = useState(route.params)

    return (
        <View style={styles.container}>
            { console.log("the object :::::     ",product) }
            <Text>details here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})