import React from 'react'
import { FlatList, View, Pressable, StyleSheet } from 'react-native'

import { Icon, Text } from 'react-native-elements'

import { iOSUIKit, iOSColors, systemWeights } from 'react-native-typography'

const data = [
  {id: '0', title: 'Suits', icon: 'suitcase-alt'},
  {id: '1', title: 'Business', icon: 'suitcase'},
  {id: '2', title: 'Home', icon: 'home'},
  {id: '3', title: 'Outdoor', icon: 'swimsuit'},
  {id: '4', title: 'Bedroom', icon: 'room'},
  {id: '5', title: 'Accessories', icon: 'stopwatch'},
  {id: '6', title: 'Laundry', icon: 'shopping-basket'},
  {id: '7', title: 'Trousers', icon: 'swimsuit'},
  {id: '8', title: 'Tops', icon: 'suitcase'},
]

const Category = ({ icon, title, id }) => {
  const showIndex = () => {
    alert(id+' pressed')
  }

  return (
    <View style={styles.category}>
      <Pressable 
        onPress={() => {showIndex()}}     
      >
        <Icon name={icon} type="fontisto" size={38} style={{...styles.categoryIcon}} color="#8e8e8e"/>
        <Text style={{...iOSUIKit.body, ...systemWeights.regular, ...styles.categoryTitle}}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default function Categories() {
  const renderItem = ({ item }) => (
    <Category icon={item.icon} title={item.title} id={item.id}/>
  )

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderItem} data={data} horizontal={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#8e8e8e',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: iOSColors.lightGray
  },
  category: {
    paddingHorizontal: 10,
  },
  categoryIcon: {
    textAlign: 'center'
  },
  categoryTitle: {
    textAlign: 'center',
    paddingTop: 8
  }
})