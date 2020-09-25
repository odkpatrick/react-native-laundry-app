import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons'

export default function ModalTitle({ title, closeAccount }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable 
                onPress={closeAccount}
                style={styles.close}
            >
                <Entypo name="cross" size={40} color="#8e8e8e" style={styles.icon}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#8e8e8e',
        paddingVertical: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 5
    },
    close: {
        position: 'absolute',
        right: 0,
        marginRight: 10
    },
    icon: {
        
    }
})