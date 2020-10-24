import React from 'react'

import { Pressable, StyleSheet, View } from 'react-native'

import { Icon, Text } from 'react-native-elements'

import { iOSUIKit } from 'react-native-typography'

export default function DisplayPackage({ id, productid, title, price, count, updateBasket }){
    const handleAdd = () => {
        updateBasket("add", id, productid)
    }

    const handleSub = () => {
        updateBasket("sub", id, productid)
    }

    const ControlBtn = ({ sign, handlePress }) => (
        <Pressable
            onPress={handlePress}
        >
            <Icon name={sign} type='font-awesome'/>
        </Pressable>
    )

    return (
        <View style={styles.package}>
            <Text style={{...iOSUIKit.title3, ...styles.packageTitle}}>{title}</Text>
            <Text style={{...iOSUIKit.title3, ...styles.packagePrice}}>{price}</Text>
            <View style={styles.packageControl}>
                {
                    (count==0) ?
                    (<ControlBtn sign="plus" handlePress={handleAdd} />) :
                    (
                        <>
                            <ControlBtn sign="minus" handlePress={handleSub} />
                            <Text style={styles.packageCount}>{count}</Text>
                            <ControlBtn sign="plus" handlePress={handleAdd} />
                        </>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    package: {
        flexDirection: "row",
        paddingVertical: 5
    },
    packageTitle: {

    },
    packagePrice: {
        paddingHorizontal: 10
    },
    packageCount: {
        paddingHorizontal: 10
    },
    packageControl: {
        flexDirection: 'row',
        paddingHorizontal: 10
    }
})