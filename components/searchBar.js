import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput , View } from 'react-native'

import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function SearchBar() {
    const [input, handleChange] = useState('')


    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Start typing to search"
                onChangeText={text => handleChange(text)}
                value={input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        fontSize: 16,
        flex: 1
    }
})