import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

import Checkout from '../components/checkout'

import { Icon } from 'react-native-elements'

import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import img01 from '../assets/img001.jpg'
import { FlatList } from 'react-native-gesture-handler'

export default function Product({ route, navigation }) {
    const { product, packages } = route.params
    const [myproduct] = useState({...product})  // This is the product
    const [mypackages, setPackages] = useState([...packages]) // This is the package list with count

    const width = useWindowDimensions().width

    const handleViewBasket = () => {
        navigation.navigate("Basket")
    }

    const ControlBtn = ({ sign, handlePress }) => (
        <Pressable
            onPress={handlePress}
        >
            <Icon name={sign} type='font-awesome'/>
        </Pressable>
    )

    const Package = ({ id, title, price, count }) => {

        const handleAdd = () => {
            var newPackages = mypackages
            var temp = newPackages.map(function(mypackage){
                if(mypackage.id === id) {
                    var newCount = mypackage.count + 1
                    var newpackage = {...mypackage}
                    newpackage.count = newCount
                    return {...newpackage}
                } else {
                    return {...mypackage}
                }
            })
            setPackages(() => (temp))
        }

        const handleSub = () => {
            var newPackages = mypackages
            var temp = newPackages.map(function(mypackage){
                if(mypackage.id === id) {
                    var newCount = mypackage.count - 1
                    var newpackage = {...mypackage}
                    newpackage.count = newCount
                    return {...newpackage}
                } else {
                    return {...mypackage}
                }
            })
            setPackages(() => (temp))
        }
        
        return (
            <View style={styles.package}>
                <Text>{title}</Text>
                <Text>{price}</Text>
                <View style={styles.packageControl}>
                    {
                        (count === 0) ?
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
            title={item.package.title}
            price={item.package.price}
            count={item.count}
        />
    )

    return (
        <View style={styles.container}>
            <View>
                <Image source={img01} style={{resizeMode: 'cover', width: width, ...styles.productImage}}/>
                <Text>{ product.title }</Text>
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