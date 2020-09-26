import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import Account from './components/account'
import Basket from './components/basket'
import Categories from './components/categories'
import Checkout from './components/checkout'
import Products from './components/products'
import Orders from './components/orders'
import SearchBar from './components/searchBar'

import Product from './screens/Product'
import Search from './screens/Search'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  const [accountModalVisible, setAccountModalVisible] = useState(false)
  const [ordersModalVisible, setOrdersModalVisible] = useState(false)
  const [basketModalVisible, setBasketModalVisible] = useState(false)

  const handleOpenAccount = function(){
    setAccountModalVisible(!accountModalVisible)
  }

  const handleOpenOrders = function(){
    setOrdersModalVisible(!ordersModalVisible)
  }

  const handleOpenBasket = function(){
    setBasketModalVisible(!basketModalVisible)
  }

  const HomeScreen = ({ navigation }) => {
    const handleViewProduct = () => {
      navigation.navigate('Product')
    }

    return (
      <>
        <Categories />
        <View style={styles.productsBody}>
          <Products handleViewProduct={handleViewProduct} />
          <Checkout handleOpenBasket={handleOpenBasket}/>
        </View>
      </>
    )
  }

  

  return (
    <NavigationContainer style={styles.container}>
      <Modal
        animationType="slide"
        visible={accountModalVisible}
        onRequestClose={handleOpenAccount}
      >
        <Account 
          closeAccount={handleOpenAccount}
        />
      </Modal>
      <Modal
        animationType="slide"
        visible={ordersModalVisible}
        onRequestClose={handleOpenOrders}
      >
        <Orders 
          closeOrders={handleOpenOrders}
        />
      </Modal>
      <Modal
        animationType="slide"
        visible={basketModalVisible}
        onRequestClose={handleOpenBasket}
      >
        <Basket 
          closeBasket={handleOpenBasket}
        />
      </Modal>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "Laundry App",
            headerLeft: () => (
            <Pressable 
                onPress={handleOpenAccount}
            >
                <FontAwesome5 name="user-circle" size={26} style={styles.icon}/>
            </Pressable> 
            ),
            headerRight: () => (
              <View style={styles.headerRight}>
                <Pressable
                onPress={() => {
                  navigation.navigate("Search")
                }}
                >
                  <FontAwesome5 name="search" size={26} style={styles.icon}/>
                </Pressable>
                <Pressable
                onPress={handleOpenOrders}
                >
                  <FontAwesome name="shopping-basket" size={26} style={styles.icon}/>
                </Pressable>
              </View> 
            )
          })}
        />
        <Stack.Screen 
          name="Product"
          component={Product}
          options={{
            headerTitle: "Product"
          }}
        />
        <Stack.Screen 
          name="Search"
          component={Search}
          options={() => ({
            headerTitle: () => (<SearchBar />),
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
    color: '#8e8e8e',
    marginHorizontal: 15
  },
});
