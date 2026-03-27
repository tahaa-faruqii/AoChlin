import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperview: {
        backgroundColor: '#AF0909',
        height: '30%'
    },
    text_profile: {
        marginTop: '20%',
        marginLeft: "5%",
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    image_container: {
        position: 'absolute',
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: '32%'

    },
    image: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    text_jacob: {
        fontSize: 20,
        paddingTop: 10,
        alignSelf: 'center',

    },
    balance_container: {
        marginTop: "30%",
        margin: 20
    },
    text_balance: {
        color: '#000'
    },
    text_account: {
        color: '#000'

    },
    account_container: {
        margin: 20
    },
    fontstyles: {
        fontSize: 18,

    }

})