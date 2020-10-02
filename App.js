import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { Icon, SearchBar, Text } from 'react-native-elements'

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
import { createStackNavigator } from '@react-navigation/stack'


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

export default function App() {  
  const [search, updateSearch] = useState([''])

  const updateSearchValue = (value) => {
    updateSearch(value)
  }

  const HomeScreen = ({ navigation }) => {
    const handleViewProduct = () => {
      navigation.navigate("Product")
    }

    const handleViewBasket = () => {
      navigation.navigate("Basket")
    }

    return (
      <>
        <Categories />
        <View style={styles.productsBody}>
          <Products handleViewProduct={handleViewProduct} />
          <Checkout handleOpenBasket={handleViewBasket}/>
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
  );
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
