import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Account() {
    return (
        <View style={styles.container}>
        <Text>
            basket
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})