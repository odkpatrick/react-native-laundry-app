import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

import Checkout from '../components/checkout'

import { Icon } from 'react-native-elements'

import img01 from '../assets/img001.jpg'
import { FlatList } from 'react-native-gesture-handler'

export default function Product({ allpackages, product, packages, updateBasket, handleViewBasket }) {
    const [myproduct] = useState({...product})  // This is the product
    const [mypackages] = useState(packages)     // This is the package list with count
    const [basketPackages] = useState({...packages})

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
                <Text>{title}</Text>
                <Text>{price}</Text>
                <View style={styles.packageControl}>
                    {
                        (count==0) ?
                        (<ControlBtn sign="plus" handlePress={handleAdd} />) :
                        (
                            <>
                                <ControlBtn sign="minus" handlePress={handleSub} />
                                <Text>{count}</Text>
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
                <Text>Packages</Text>
                <FlatList 
                    data={mypackages}
                    renderItem={renderItem}
                />
                <Checkout handleOpenBasket={handleViewBasket}/>
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
        flexDirection: "row"
    },
    packages: {
        flex: 1
    },
    packageControl: {
        flexDirection: 'row'
    }
})