import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export default function Checkout({ handleOpenBasket }) {
  return (
    <View>
      <Pressable
        onPress={handleOpenBasket}
        style={styles.container}
      >
        <FontAwesome5 name="shopping-basket" size={24} style={styles.icon}/>
        <Text style={styles.text}>Your basket({2})</Text>
        <Text style={styles.text}>£ 25.99</Text>
        <Feather name="arrow-right" size={24} style={styles.icon}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#8e8e8e'
  },
  icon: {
    color: '#8e8e8e',
    padding: 10
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 10
  }
})