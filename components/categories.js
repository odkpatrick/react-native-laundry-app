import React from 'react'
import { FlatList, View, Pressable, StyleSheet } from 'react-native'

import { Icon, Text } from 'react-native-elements'

import { iOSUIKit, iOSColors, systemWeights } from 'react-native-typography'

const Category = ({ icon, title, id, handleScroll }) => {
  return (
    <View style={styles.category}>
      <Pressable 
        onPress={() => {handleScroll(id)}}     
      >
        <Icon name={icon} type="fontisto" size={38} style={{...styles.categoryIcon}} color="#8e8e8e"/>
        <Text style={{...iOSUIKit.body, ...systemWeights.regular, ...styles.categoryTitle}}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default function Categories ({ handleScroll, listRef, data }) {
  const renderItem = ({ item }) => (
    <Category icon={item.icon} title={item.title} id={item.id} handleScroll={handleScroll}/>
  )

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderItem} data={data} horizontal={true} ref={listRef}/>
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
    paddingHorizontal: 25,
  },
  categoryIcon: {
    textAlign: 'center'
  },
  categoryTitle: {
    textAlign: 'center',
    paddingTop: 8
  }
})