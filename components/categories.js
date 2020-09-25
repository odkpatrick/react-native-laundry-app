import React from 'react'
import { FlatList, Text, View, Pressable, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const data = [
  {id: '0', title: 'Suits', icon: 'tshirt'},
  {id: '1', title: 'Business', icon: 'suitcase'},
  {id: '2', title: 'Home', icon: 'home'},
  {id: '3', title: 'Outdoor', icon: 'swatchbook'},
  {id: '4', title: 'Bedroom', icon: 'bed'},
  {id: '5', title: 'Accessories', icon: 'black-tie'},
  {id: '6', title: 'Laundry', icon: 'shopping-basket'},
  {id: '7', title: 'Trousers', icon: 'walking'},
  {id: '8', title: 'Tops', icon: 'tshirt'},
]

const Category = ({ icon, title, id }) => {
  return (
    <View style={styles.category}>
      <Pressable 
        onPress={()=>{
          alert(id+' Pressed')
        }}     
      >
        <FontAwesome5 name={icon} size={35} style={styles.categoryIcon}/>
        <Text style={styles.categoryTitle}>{title}</Text>
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
    paddingVertical: 10,
  },
  category: {
    paddingHorizontal: 10,
  },
  categoryIcon: {
    textAlign: 'center',
    color: '#8e8e8e'
  },
  categoryTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#8e8e8e',
    paddingTop: 5
  }
})