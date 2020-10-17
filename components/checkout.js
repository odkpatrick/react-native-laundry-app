import React from 'react'
import { Pressable, View, StyleSheet } from 'react-native'

import { Icon, Text } from 'react-native-elements'

import { iOSUIKit } from 'react-native-typography'


export default function Checkout({ handleOpenBasket }) {
  return (
    <View>
      <Pressable
        onPress={handleOpenBasket}
        style={styles.container}
      >
        <View style={styles.details}>
          <Icon name="shopping-basket" type="fontisto" size={22} style={styles.icon}/>
          <Text style={{...iOSUIKit.body, ...styles.text}}>Your basket</Text>
          <Text style={{...iOSUIKit.bodyEmphasized, ...styles.text}}>UGX 0.00</Text>
        </View>
        <Icon name="arrow-right" size={20} type="fontisto" style={{...styles.icon}}/>
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
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    padding: 10
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 10
  }
})