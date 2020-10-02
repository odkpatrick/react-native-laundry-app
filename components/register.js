import React from 'react'

import { StyleSheet, View } from 'react-native'

import { Button, Icon, Input } from 'react-native-elements'

import ModalTitle from './modalTitle'

export default function RegisterModal({ close }) {
    return (
        <View style={styles.container}>
            <ModalTitle
                title="Register"    
                close={close}            
            />
            <View style={styles.content}>
                <Input 
                    placeholder="First Name"
                    leftIcon={
                        <Icon name="pinboard" type="fontisto"/>
                    }
                />
                <Input 
                    placeholder="Last Name"
                    leftIcon={
                        <Icon name="pinboard" type="fontisto"/>
                    }
                />
                <Input 
                    placeholder="Mobile number"
                    leftIcon={
                        <Icon name="phone" type="fontisto"/>
                    }
                />
                <Input 
                    placeholder="email@address.com"
                    leftIcon={
                        <Icon name="email" type="fontisto"/>
                    }
                />
                <Button
                    title="Register"
                    type="solid"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: "#f0f0f0"
    }
})