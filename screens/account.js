import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, View } from 'react-native'

import { Icon, ListItem, Text } from 'react-native-elements'

import { iOSUIKit } from 'react-native-typography'

import RegisterModal from '../components/register'
import SignInModal from '../components/signIn'

const clientList =  [
    {icon: 'user', value:'Create a new account'},
    {icon: 'login', value:'Sign in to an existing account'}
]

const myList = [
    {icon: 'question', value:'Help'},
    {icon: 'book', value:'Terms of service'},
    {icon: 'lock', value:'Privacy Policy'}
]

export default function Account() {
    const [registerModalVisible, setRegisterModalVisible] = useState(false)
    const [signInModalVisible, setSignInModalVisible] = useState(false)

    const showRegisterModal = () => {
        setRegisterModalVisible(true)
    }

    const showSignInModal = () => {
        setSignInModalVisible(true)
    }

    const handleClientDetail = (i) => {
        (i === 0) ? showRegisterModal() : showSignInModal() 
    }

    const handlePress = (i) => {
        return
    }

    return (
        <View style={styles.container}>
            <Text style={{...iOSUIKit.bodyEmphasized, ...styles.detailTitle}}>Your details</Text>
            {
                clientList.map((item, i) => (
                    <ListItem key={i} bottomDivider onPress={() => {handleClientDetail(i)}}>
                        <Icon name={item.icon} type="antdesign"/>
                        <ListItem.Content>
                            <ListItem.Title>{item.value}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                ))
            }
            <Text style={{...iOSUIKit.bodyEmphasized, ...styles.detailTitle}}>Our details</Text>
            {
                myList.map((item, i) => (
                    <ListItem key={i} bottomDivider onPress={() => {handlePress(i)}}>
                        <Icon name={item.icon} type="antdesign"/>
                        <ListItem.Content>
                            <ListItem.Title>{item.value}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            <Modal 
                animationType="slide"
                visible={registerModalVisible}
                hardwareAccelerated={true}
            >
                <RegisterModal 
                    close={() => {setRegisterModalVisible(false)}}
                />
            </Modal>
            <Modal 
                animationType="slide"
                visible={signInModalVisible}
                hardwareAccelerated={true}
            >
                <SignInModal 
                    close={() => {setSignInModalVisible(false)}}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    },
    detailTitle: {
        padding: 20,
        backgroundColor: "#fff",
    },
    LinkIcon: {
        color: '#8e8e8e'
    }
})