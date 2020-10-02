import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Button, Icon, Input } from 'react-native-elements'

import ModalTitle from './modalTitle'

export default function SignInRegister({ close }) {
    return (
        <View style={styles.container}>
            <ModalTitle 
                title="sign in"
                close={close}
            />
            <View style={styles.content}>
                <Input 
                    placeholder="email@address.com"
                    leftIcon={
                        <Icon name="email" type="fontisto"/>
                    }
                />
                <Input 
                    placeholder="password"
                    leftIcon={
                        <Icon name="key" type="fontisto"/>
                    }
                />
                <Button
                    title="Log in"
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