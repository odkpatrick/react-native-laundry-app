import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function Header({ handleOpenAccount, handleOpenOrders }) {
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={handleOpenAccount}
            >
                <FontAwesome5 name="user-circle" size={26} style={styles.icon}/>
            </Pressable>    
            <Text style={styles.title}>Laundry App</Text>
            <View style={styles.end}>
                <FontAwesome5 name="search" size={26} style={styles.searchIcon}/>
                <Pressable
                    onPress={handleOpenOrders}
                >
                    <FontAwesome name="shopping-basket" size={26} style={styles.basketIcon}/>
                </Pressable>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#8e8e8e'
    },
    title: {
        fontSize: 24,
        paddingHorizontal: 10
    },
    icon: {
        color: '#8e8e8e',
        paddingHorizontal: 5
    },
    searchIcon: {
        color: '#8e8e8e',
        paddingHorizontal: 5
    },
    basketIcon: {
        color: '#8e8e8e',
        paddingHorizontal: 5

    },
    end: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});