import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import ModalTitle from './modalTitle'

export default function Account({ closeBasket }) {
    return (
        <View style={styles.container}>
            <ModalTitle 
                title="Basket"
                closeAccount={closeBasket}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})