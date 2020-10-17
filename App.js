import React, { useRef } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { Icon, Text } from 'react-native-elements'

import { iOSUIKit } from 'react-native-typography'

import Account from './screens/Account'
import Basket from './screens/Basket'
import Orders from './screens/Orders'
import Product from './screens/Product'
import Search from './screens/Search'

import Categories from './components/categories'
import Checkout from './components/checkout'
import Products from './components/products'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import img01 from './assets/img001.jpg'
import img02 from './assets/img002.jpg'
import img03 from './assets/img003.jpg'
import img04 from './assets/img004.jpg'
import img05 from './assets/img005.jpg'

import * as firebase from 'firebase'

// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCmcH8ULBRDRylGCgOiNl6X5_CJvBM59gg",
  authDomain: "laundryapp-a99d6.firebaseapp.com",
  databaseURL: "https://laundryapp-a99d6.firebaseio.com",
  projectId: "laundryapp-a99d6",
  storageBucket: "laundryapp-a99d6.appspot.com",
  messagingSenderId: "387778728147",
  appId: "1:387778728147:web:a399f3b72a250afdda0426"
};

// Initialize Firebase if not yet, fix before deploying
if(firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database()

const Stack = createStackNavigator()

const HeaderLeft = ({ navigation }) => (
  <Pressable 
    onPress={() => {
      navigation.navigate("Account")
    }}
  >
    <Icon name="male" type="fontisto" style={styles.icon}/>
  </Pressable>
)

const HeaderTitle = () => (
  <Text style={iOSUIKit.title3Emphasized}> Laundry App </Text>
)

const HeaderRight = ({ navigation }) => (
  <View style={styles.headerRight}>
    <Pressable
      onPress={() => {
        navigation.navigate("Search")
      }}
    >
      <Icon name="search" type="fontisto" style={styles.icon}/>
    </Pressable>
    <Pressable
      onPress={() => {
        navigation.navigate("Orders")
      }}
    >
      <Icon name="shopping-basket" type="fontisto" style={styles.icon}/>
    </Pressable>
  </View> 
)

export default class App extends React.Component {  
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      products: [],
      packages: null,

      basket: [],
      /*
      categories: [
        {id: '0', title: 'Suits', icon: 'suitcase-alt'},
        {id: '1', title: 'Business', icon: 'suitcase'},
        {id: '2', title: 'Home', icon: 'home'},
        {id: '3', title: 'Outdoor', icon: 'swimsuit'},
        {id: '4', title: 'Bedroom', icon: 'room'},
        {id: '5', title: 'Accessories', icon: 'stopwatch'},
        {id: '6', title: 'Laundry', icon: 'shopping-basket'},
        {id: '7', title: 'Trousers', icon: 'swimsuit'},
        {id: '8', title: 'Tops', icon: 'suitcase'},
      ],
      products: [
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
      ],
      */
    }

    this.getCategories = this.getCategories.bind(this)
    this.getPackages = this.getPackages.bind(this)
    this.getProducts = this.getProducts.bind(this)

  }

  getCategories(){
    var categoriesRef = database.ref('categories/')
    categoriesRef.once('value').then((snapshot)=>{
      var mycategories = {...(snapshot.val())}
      var catKeys = Object.keys(mycategories)
      var temp = catKeys.map((catkey) => mycategories[catkey])
      temp.sort((a, b) => a["id"] - b["id"])
      this.setState({
        categories: temp
      })
    })
  }

  getPackages(){
    var packagesRef = database.ref('packages/')
    packagesRef.once('value').then((snapshot) => {
      this.setState({
        packages: {...(snapshot.val())}
      })
    })
  }

  getProducts(){
    var productsRef = database.ref('products/')
    productsRef.once('value').then((snapshot)=>{
      var mypdts = {...(snapshot.val())}
      var mycategories = this.state.categories
      var catKeys = Object.keys(mycategories)
      var temp = catKeys.map((catkey) => {
        var x = {...mycategories[catkey]}
        var y = {
          id: x.id,
          category: x.title,
        } 
        var z = null
        var tlist = x.products
        if(x.products.length == 1){
          //get packages
          z = {...(this.state.packages)}
          tlist = mypdts[x.products[0]].packages
        } else {
          //get products
          z = {...mypdts}
        }
        var mylist = tlist.map((pdtkey) => {
          let k = {
            img: img01,
            id: (z[pdtkey]).id,
            title: (z[pdtkey]).title,
            price: ((z[pdtkey]).price) ? ((z[pdtkey]).price) : 0
          }
          return {...k}
        })
        y = {
          products: mylist,
          ...y
        }
        return y      
      })
      this.setState({
        products: temp
      })
    })
  }

  componentDidMount(){
    this.getCategories()
    this.getPackages()
    this.getProducts()
  }

  render() {
    const HomeScreen = ({ navigation }) => {
      const categoryRefContainer = useRef(null)
      const productsRefContainer = useRef(null)

      const handleScroll = (i) => {
        if(categoryRefContainer.current) {
          categoryRefContainer.current.scrollToIndex({
            index: i,
            viewPosition: 0.5
          })
        }

        if(productsRefContainer.current) {
          productsRefContainer.current.scrollToIndex({
            index: i
          })
        }
      }

      const handleProductsScroll = (i) => {      
        if(categoryRefContainer.current) { 
          categoryRefContainer.current.scrollToIndex({
            index: i,
            viewPosition: 0.5
          })
        }     
      }
 
      const handleViewProduct = () => {
        navigation.navigate("Product")
      }
  
      const handleViewBasket = () => {
        navigation.navigate("Basket")
      }
      
      return (
        <>
          {
            (this.state.categories.length == 0) ? 
            (<Text>Loading...</Text>) :
            (<Categories handleScroll={handleScroll} listRef={categoryRefContainer} data={this.state.categories}/>)
          }
          <View style={styles.productsBody}>
            {
              (this.state.products.length == 0) ? 
              (<Text>Loading...</Text>) :
              (
                <>
                <Products data={this.state.products} handleViewProduct={handleViewProduct} listRef={productsRefContainer} handleScroll={handleProductsScroll}/>
                <Checkout handleOpenBasket={handleViewBasket}/>
                </>
              )
            }
          </View>
        </>
      )
    }
  
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerLeft: () => (<HeaderLeft navigation={navigation}/>),
              headerTitle: () => (<HeaderTitle/>),
              headerRight: () => (<HeaderRight navigation={navigation}/>)
            })}
          />
          <Stack.Screen 
            name="Account"
            component={Account}
            options={{
              headerTitle: "Account Settings"
            }}
          />
          <Stack.Screen 
            name="Product"
            component={Product}
            options={{
              headerTitle: "Product"
            }}
          />
          <Stack.Screen 
            name="Orders"
            component={Orders}
            options={{
              headerTitle: "Your Orders"
            }}
          />
          <Stack.Screen 
            name="Search"
            component={Search}
            options={() => ({
              headerTitle: "Search",
            })}
          />
          <Stack.Screen 
            name="Basket"
            component={Basket}
            options={() => ({
              headerTitle: "Basket",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  productsBody: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 20
  }
});
