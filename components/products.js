import React, { useRef } from 'react'
import { Image, Pressable, View, StyleSheet, useWindowDimensions } from 'react-native'

import { Text } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'

import { iOSUIKit } from 'react-native-typography'

const Product = ({ title, img, price, width, handleViewProduct }) => (
    <Pressable
        onPress={() => {
            handleViewProduct()
        }}
    >
        <Image source={img} style={{resizeMode: 'cover', width: width, ...styles.productImage}}/>
        <Text style={{...iOSUIKit.title3, ...styles.productTitle}}>{title}</Text>
        <Text style={{...iOSUIKit.title3Emphasizedmm, ...styles.productPrice}}>{ "UGX " + price}</Text>
    </Pressable>
)

const CategoryProducts = function ({ data, handleViewProduct }) {
    const window = useWindowDimensions()

    const renderItem = ({ item }) => (
        <Product
            title={item.title}
            img={item.img}
            price={item.price}
            width={window.width}
            handleViewProduct={handleViewProduct}
        />
    )

    return (
        <View>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
    )
}

export default function Products({ data, handleViewProduct, listRef, handleScroll }) {
    const viewabilityConfigRef = useRef({
        viewAreaCoveragePercentThreshold: 100,
        minimumViewTime: 250
    })

    const onViewableItemsChangedRef = useRef(({viewableItems}) => {
        if(viewableItems.length) {
            const index = viewableItems[0].index
            handleScroll(index)
        }
    })

    const renderItem = ({ item }) => (
        <CategoryProducts 
            data={item.products}
            handleViewProduct={handleViewProduct}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                ref={listRef}
                horizontal={true}
                snapToInterval={0}
                snapToAlignment={'center'}
                viewabilityConfig={viewabilityConfigRef.current}
                onViewableItemsChanged={onViewableItemsChangedRef.current}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {

    },
    productTitle: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
    },
    productImage: {
        height: 200,
        marginBottom: 5,
    },
    productPrice: {
        padding: 15,
        fontSize: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
    }   
})