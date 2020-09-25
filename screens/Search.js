import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function Search() {
    return (
        <View style={styles.container}>
            <Text>Search Page</Text>
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