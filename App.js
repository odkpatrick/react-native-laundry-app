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
      categoriesObject: null,
      productsObject: null,
      packages: null,
      basket: []
    }

    this.getCategories = this.getCategories.bind(this)
    this.getPackages = this.getPackages.bind(this)
    this.getProducts = this.getProducts.bind(this)
    this.updateBasket = this.updateBasket.bind(this)

  }

  getCategories(){
    var categoriesRef = database.ref('categories/')
    categoriesRef.once('value').then((snapshot)=>{
      var mycategories = {...(snapshot.val())}
      var categoryKeys = Object.keys(mycategories)
      var temp = categoryKeys.map((category) => mycategories[category])
      temp.sort((a, b) => a["id"] - b["id"])
      this.setState({
        categories: temp,
        categoriesObject: {...mycategories}
      })
    })
  }

  getPackages(){
    var packagesRef = database.ref('packages/')
    packagesRef.once('value').then((snapshot) => {
      this.setState({
        packages: {...(snapshot.val())}
      })
      var mybasket = this.state.basket
      var mypackages = {...(snapshot.val())}
      mybasket.forEach(function(productObject){
        var productpackages = productObject.packages
        var temp = []
        productpackages.forEach(function(packagekey){
          temp.push({ count: 0, ...mypackages[packagekey]})
        })
        productObject.packages = temp
      })
    })
  }

  getProducts(){
    var productsRef = database.ref('products/')
    productsRef.once('value').then((snapshot)=>{
      var myproducts = {...(snapshot.val())}
      var mycategories = {...(this.state.categoriesObject)}
      var categoryKeys = Object.keys(mycategories)
      var temp = categoryKeys.map(function(category){
        var mycategory = {...mycategories[category]}
        var productList = mycategory.products
        var myResult = {
          id: mycategory.id,
          category: mycategory.title,
        }
        var temp2 = productList.map(function(product){
          var tempproduct = {
            id: myproducts[product].id,
            title: myproducts[product].title,
            img: img01,
            price: 0,
            packages: myproducts[product].packages
          }
          return {...tempproduct}
        })
        var myResult2 = {
          products: temp2,
          ...myResult 
        }
        return {...myResult2}
      })
      temp.sort((a, b) => a["id"] - b["id"])
      var temp2 = []
      temp.forEach(function({ products }){
        products.forEach(function(product){
          temp2.push({...product})
        })
      })
      this.setState({
        products: temp,
        productsObject: {...myproducts},
        basket: temp2
      })
      this.getPackages()      
    })
  }

  updateBasket(action, packageid, productid){
    console.log("Perform "+ action + " on")
    console.log("Package with id : " + packageid)
    console.log("To product with id : " + productid)

    // get instance of object in basket
    // get instance of package in object instance
    // update package count in instance
    // update basket

    
    
  }

  componentDidMount(){
    this.getCategories()
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
 
      const handleViewProduct = (productid) => {        
        var myproducts = {...(this.state.productsObject)}
        var productskeys = Object.keys(myproducts)
        var myproductlist = productskeys.filter(function(productkey){
          return myproducts[productkey].id === productid
        })
        var productkey = myproductlist[0]
        var mybasket = this.state.basket
        var myproduct = {...myproducts[productkey]}
        var basketmatch = mybasket.filter(function(productObject){
          return productObject.id === productid
        })
        var mathcproduct = {...basketmatch[0]}
        navigation.navigate("Product", {
          product: {...myproduct},
          packages: mathcproduct.packages,
        })
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

    const ProductScreen = ({ route, navigation }) => {
      const { product, packages } = route.params

      const handleViewBasket = () => {
        navigation.navigate("Basket")
      }
      return (
        <Product 
          updateBasket={this.updateBasket}
          product={{...product}}
          packages={packages}
          handlePress={handleViewBasket}
          handleViewBasket={handleViewBasket}
          allpackages={{...this.state.packages}}
        />
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
            component={ProductScreen}
            options={({ route }) => ({ title: route.params.product.title })}
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
