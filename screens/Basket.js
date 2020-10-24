import React, { useEffect, useState } from 'react'

import { FlatList, StyleSheet, Text, View } from 'react-native'

import DisplayPackage from '../components/displayPackage'

export default function Basket({ basket, updateBasket }) {
    const renderItem = ({ item }) => (
        <DisplayPackage
            id={item.id}
            productid={item.productid}
            title={item.title}
            price={item.price}
            count={item.count}
            updateBasket={updateBasket}
        />
    )


    return (
        <View style={styles.container}>
            {
                (basket.length) ?
                (
                    <FlatList 
                        data={basket}
                        renderItem={renderItem}
                    />
                ) :
                (<Text>Empty Basket</Text>)    
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})