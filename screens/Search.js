import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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