import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toptext_view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        flex: 1,
        textAlign: 'left',
        marginLeft: '7%'
    },
    imageContainer: {
        marginLeft: 'auto',
    },
    jacobtext: {
        textAlign: 'left',
        marginLeft: '7%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: "8%"
    },
    Banner_Container: {
        alignSelf: 'center'
    },
    banner: {
        margin: 10,
        height: 140,
        // width: "5%",
        resizeMode: 'contain'
    },
    input: {
        margin: 10,
        width: '90%',
        height: 40,
        backgroundColor: '#d3d3d3',
        alignSelf: 'center',
        borderRadius: 40,
        paddingLeft: 10
    },
    recharge_container: {
        padding: 15,
        backgroundColor: "#AF0909",
        marginHorizontal: 10,
        borderRadius: 20,
        height: '12%'
    },
    button_view: {
        flexDirection: 'row',
        padding: 5,
        alignSelf: 'flex-end',
        margin: 5,
        position: 'absolute',

    },
    button_rechrge: {
        top: 5,
        left: 30,
        backgroundColor: 'white',
        width: '40%',
        height: 40,
        borderRadius: 20
    },
    button_pay: {
        top: 5,
        left: 40,
        backgroundColor: 'white',
        width: '30%',
        height: 40,
        borderRadius: 20
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    flat_buton_style: {
        marginLeft: 10,
        top: 5,
        // padding: 15,
        marginRight: 1,
        backgroundColor: '#000',
        alignItems: "center",
        borderRadius: 10,
        height: 60,

    },
    flat_buton_style2: {
        marginLeft: 13,
        top: 20,
        // padding: 5,
        marginRight: 1,
        backgroundColor: '#000',
        alignItems: "center",
        borderRadius: 10,
        height: 80
    }
});


export default styles