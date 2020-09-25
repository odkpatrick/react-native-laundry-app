import React from 'react'
import { FlatList, Image, Text, Pressable, View, StyleSheet, useWindowDimensions } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'


import img01 from '../assets/img001.jpg'
import img02 from '../assets/img002.jpg'
import img03 from '../assets/img003.jpg'
import img04 from '../assets/img004.jpg'
import img05 from '../assets/img005.jpg'

const data = [
    {id: '0', category: 'Suits', products:[
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'}
    ]},
    {id: '1', category: 'Suits', products:[
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'}
    ]},
    {id: '2', category: 'Suits', products:[
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
    ]},
    {id: '3', category: 'Suits', products:[
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
    ]},
    {id: '4', category: 'Suits', products:[
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
    ]},
    {id: '5', category: 'Suits', products:[
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'}
    ]},
    {id: '6', category: 'Suits', products:[
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'}
    ]},
    {id: '7', category: 'Suits', products:[
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'}
    ]},
    {id: '8', category: 'Suits', products:[
        {id: '3', title: 'T-shirts', img: img04, price: '£ 2.75'},
        {id: '4', title: 'Knitwear', img: img05, price: '£ 19.00'},
        {id: '0', title: 'Shirts Promo', img: img01, price: '£ 12.00'},
        {id: '1', title: 'Shirts', img: img02, price: '£ 2.60'},
        {id: '2', title: 'Blouses', img: img03, price: '£ 6.00'},
    ]},
]

const Product = ({ title, img, price, width, handleViewProduct }) => (
    <Pressable
        onPress={() => {
            handleViewProduct()
        }}
    >
        <Image source={img} style={{resizeMode: 'cover', width: width, ...(styles.productImage)}}/>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>{price}</Text>
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

export default function Products({ handleViewProduct }) {
    const renderItem = ({ item }) => (
        <CategoryProducts 
            data={item.products}
            handleViewProduct={handleViewProduct}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} horizontal={true}/>
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
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        color: '#000'
    },
    productImage: {
        height: 200,
        marginBottom: 5
    },
    productPrice: {
        padding: 10,
        fontSize: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: '#000'
    }   
})