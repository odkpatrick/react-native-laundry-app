import React from 'react'

import { Pressable, StyleSheet, View } from 'react-native'

import { Icon, Text } from 'react-native-elements'

import { Entypo } from '@expo/vector-icons'

export default function ModalTitle({ title, close }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable 
                onPress={close}
                style={styles.close}
            >
                <Icon name="close" type="fontisto"/>
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
        borderBottomColor: '#f0f0f0',
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