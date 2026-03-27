import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    var_view: {
        margin: 5,
        // padding: 10,
        // marginTop: '5%',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    text_acc: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    text_phone: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#000'
    },
    form1_view: {
        bottom: 20,
        left: '5%',
        // padding: 5,

    },
    input: {
        justifyContent: 'center', alignSelf: 'center',
        width: '90%',
        height: 50,
        borderRadius: 5,
        // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: '#FFFFFF',
        // paddingHorizontal: 10,
        marginBottom: 8,
        borderColor: '#AF0909',
        borderWidth: 2,
        right: 18,
        paddingLeft: 10,
        color: '#000'
    },
    text: {
        color: "#1B1B1B",
        fontWeight: '500',
        fontSize: 14,
        paddingVertical: 5

    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        left: 10,
        bottom: 20
    },
    checkbox: {
        // marginRight: 10, // Add some space between the checkbox and text
    },
    button_view: {
        width: '80%',
        alignSelf: 'center',
        // position: 'absolute',
        bottom: '5%',
        // paddingVertical: 2,
    },
    linkText: {
        textDecorationLine: "underline",
        color: "#000",
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 32,
        marginBottom: 15,
        textAlign: 'center',
        color: '#AF0909'
    },
    closeButton: {
        alignSelf: 'flex-end',
        bottom: 20,
        left: 20
    },
    errorMessage: {
        textAlign: 'right',
        marginRight: '15%',
        color: '#AF0909'
    }
})

