import React, { useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native'

import Checkout from '../components/checkout'

import { Icon, Text } from 'react-native-elements'

import { iOSUIKit } from 'react-native-typography'

import img01 from '../assets/img001.jpg'

export default function Product({ basket, product, packages, updateBasket, handleViewBasket }) {
    const [myproduct] = useState({...product})  // This is the product
    const [mypackages] = useState(packages)     // This is the package list with count

    const width = useWindowDimensions().width

    const ControlBtn = ({ sign, handlePress }) => (
        <Pressable
            onPress={handlePress}
        >
            <Icon name={sign} type='font-awesome'/>
        </Pressable>
    )

    const Package = ({ id, title, price, count }) => {
        const handleAdd = () => {
            updateBasket("add", id, myproduct.id)
        }

        const handleSub = () => {
            updateBasket("sub", id, myproduct.id)
        }
        
        return (
            <View style={styles.package}>
                <Text style={{...iOSUIKit.title3Emphasized, ...styles.packageTitle}}>{title}</Text>
                <Text style={{...iOSUIKit.title3Emphasized, ...styles.packagePrice}}>{price}</Text>
                <View style={styles.packageControl}>
                    {
                        (count==0) ?
                        (<ControlBtn sign="plus" handlePress={handleAdd} />) :
                        (
                            <>
                                <ControlBtn sign="minus" handlePress={handleSub} />
                                <Text style={{...iOSUIKit.title3, ...styles.packageCount}}>{count}</Text>
                                <ControlBtn sign="plus" handlePress={handleAdd} />
                            </>
                        )
                    }
                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => (
        <Package
            id={item.id}
            title={item.title}
            price={item.price}
            count={item.count}
        />
    )

    return (
        <View style={styles.container}>
            <View>
                <Image source={img01} style={{resizeMode: 'cover', width: width, ...styles.productImage}}/>
                <Text>{ myproduct.title }</Text>
                <Text>Description</Text>
            </View>
            <View style={styles.packages}>
                <FlatList 
                    data={mypackages}
                    renderItem={renderItem}
                />
                <Checkout basket={basket} handleOpenBasket={handleViewBasket}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productImage: {
        height: 200,
        marginBottom: 5,
    },
    package: {
        flexDirection: "row",
        paddingVertical: 5
    },
    packages: {
        flex: 1
    },
    packageTitle: {

    },
    packagePrice: {
        paddingHorizontal: 10
    },
    packageControl: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    packageCount: {
        paddingHorizontal: 10
    }
})