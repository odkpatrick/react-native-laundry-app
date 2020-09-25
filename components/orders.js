import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import ModalTitle from './modalTitle'

export default function Account({ closeOrders }) {
    return (
        <View style={styles.container}>
            <ModalTitle 
                title="Orders"
                closeAccount={closeOrders}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})