import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo, FontAwesome5, FontAwesome } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignUp from '../screens/SignUp'

import ModalTitle from './modalTitle'

const Stack = createStackNavigator()

export default function Account({ closeAccount }) {
    const Link = ({ icon, value, handleNav }) => (
        <Pressable 
            style={styles.link}
            onPress={() => {
                if(handleNav && icon==="pencil") {
                    handleNav()
                }
            }}
        >
            <Entypo name={icon} size={24} style={styles.LinkIcon}/>
            <Text style={styles.linkText}>{value}</Text>
        </Pressable>
    )

    const Details = ({title, links, handleNav}) => (
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>{title}</Text>
            {
                links.map((link, index) => (<Link icon={link.icon} value={link.value} key={index} handleNav={handleNav} />))
            }
        </View>
    )

    const AccountScreen = ({ navigation }) => {
        const handleRegister = () => {
            navigation.navigate('Register')
        }

        return (
        <>
            <View style={styles.body}>
                <Details 
                    title="Your details"
                    links={[
                        {icon: 'pencil', value:'Create a new account'},
                        {icon: 'login', value:'Sign in to an existing account'},
                    ]}
                    handleNav={handleRegister}
                />
                <Details 
                    title="Our details"
                    links={[
                        {icon: 'help', value:'Help'},
                        {icon: 'open-book', value:'Terms of service'},
                        {icon: 'shield', value:'Privacy Policy'},
                    ]}
                />
            </View>
        </>
    )}

    return (
        <NavigationContainer style={styles.container} independent={true}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Account"
                    component={AccountScreen}
                    options={() => ({
                        headerRight: () => (
                            <>
                                <Pressable 
                                    onPress={closeAccount}
                                    style={styles.close}
                                >
                                    <Entypo name="cross" size={40} color="#8e8e8e"/>
                                </Pressable>
                            </>
                        )
                    })}
                />
                <Stack.Screen 
                    name="Register"
                    component={SignUp}
                    options={() => ({

                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        backgroundColor: '#cecece',
    },
    detailContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginBottom: 2
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    detailTitle: {
        fontSize: 22,
        paddingVertical: 10
    },
    linkText: {
        fontSize: 18,
        marginLeft: 20
    },
    LinkIcon: {
        color: '#8e8e8e'
    }
})