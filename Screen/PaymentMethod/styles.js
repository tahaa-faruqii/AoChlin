import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default styles = StyleSheet.create({
    card_Container: {
        alignSelf: 'center',
        // resizeMode: 'cover'
        backgroundColor: '#000',
        height: 60
    },
    card: {
        alignSelf: 'center',
        height: '25%',
        resizeMode: ''
    },
    form1_view: {
        // bottom: 20,
        left: '5%',
        // padding: 5,

    },
    text: {
        color: "#1B1B1B",
        fontWeight: '500',
        fontSize: 14,
        paddingVertical: 5

    },
    input: {
        justifyContent: 'center', alignSelf: 'center',
        width: '90%',
        height: 50,
        borderRadius: 15,
        color: '#FFFFFF',
        marginBottom: 8,
        borderColor: '#AF0909',
        borderWidth: 2,
        right: 18,
        paddingLeft: 10,
        color: '#000'
    },
    input2: {

        top: '10%',
        // alignSelf: 'flex-start',
        width: 150,
        height: 50,
        borderRadius: 5,
        color: '#FFFFFF',
        marginBottom: 8,
        borderColor: '#AF0909',
        borderWidth: 2,
        paddingLeft: 10,
        color: '#000',

    },
    container_outer: {
        borderWidth: 2,
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        borderColor: '#AF0909',
        width: '100%',


    },
    flag: {
        borderWidth: 2,
        borderColor: '#AF0909'
    },
    container_input: {

        height: 50,
        // padding: -4,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#AF0909',
        // textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    date_container: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "92%", alignSelf: 'center'
    }
})