import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default styles = StyleSheet.create({

    container: {
        flex: 1
    },
    view_driver: {

        top: '-30%',
        // margin: 10,
        marginLeft: '5%'
    },
    text_driver: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',

    },
    text_driverpick: {
        color: '#000',
        paddingTop: 10,
        flexDirection: 'row',
        // position: 'absolute'
    },
    text_2min: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 10,
        marginTop: '10%',
        fontSize: 18,
        color: '#AF0909'
    },
    image_container: {
        // top: '20%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: '#F4F4F4',
        borderRadius: 50
    },
    text_toyota: {
        fontSize: 16, color: '#000',
        paddingTop: 5, fontWeight: 'bold'
    },
    text_drick: {
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    view_500: {
        flexDirection: 'row',
        top: '50%',
        alignSelf: 'flex-start',
        marginLeft: '-30%',
        paddingTop: 10
    },
    button: {
        width: 40, height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        marginRight: 20


    },
    button2: {
        width: 40, height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        // marginRight: 2

    },
    touch_buttonview: {
        top: -40,
        // position: "absolute",
        alignSelf: 'flex-end',
        marginLeft: '20%',
        flexDirection: 'row',
        // paddingHorizontal: 2
        right: '5%',

    },
    input_view: {
        // marginTop: '20%',
        paddingVertical: 20,
        width: '90%',
        alignSelf: 'center',
        // position: 'absolute',
        bottom: '20%'
    },
    text_loyal: {
        padding: 12,
        fontWeight: 'bold'
    },
    input: {
        // padding: -3,
        // width: '120%',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#AF0909',
        paddingLeft: 50
    }


})

