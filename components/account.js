import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import ModalTitle from './modalTitle'

export default function Account({ closeAccount }) {
    const Link = ({ icon, value }) => (
        <View style={styles.link}>
            <FontAwesome5 name={icon} size={22} style={styles.LinkIcon}/>
            <Text style={styles.linkText}>{value}</Text>
        </View>
    )

    const Details = ({title, links}) => (
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>{title}</Text>
            {
                links.map((link) => (<Link icon={link.icon} value={link.value} />))
            }
        </View>
    )

    return (
        <View style={styles.container}>
            <ModalTitle 
                title="Account"
                closeAccount={closeAccount}
            />
            <View style={styles.body}>
                <Details 
                    title="Your details"
                    links={[
                        {icon: 'search', value:'Create a new account'},
                        {icon: 'search', value:'Sign in to an existing account'},
                    ]}
                />
                <Details 
                    title="Our details"
                    links={[
                        {icon: 'search', value:'Help'},
                        {icon: 'search', value:'Terms of service'},
                        {icon: 'search', value:'Privacy Policy'},
                    ]}
                />
            </View>
        </View>
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
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 5
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    detailTitle: {
        fontSize: 24,
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