import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'space-between',
        // justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: 'grey',
        // borderRadius: 12,
        alignItems: 'center',
        paddingHorizontal: '2%',
        // marginTop: '8%'
    },
    button: {
        top: '1%',
        width: '40%',
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 40,
        borderBottomWidth: 2,

    },
    inActiveButton: {
        width: '40%',
        // width: '49%',
        backgroundColor: 'transparent'
    },
    btnText: {
        // fontFamily: Fonts.SF_Regular,
        color: '#77AB16',
        // fontSize: 10,
        fontWeight: '500',
    },
    inActiveBtnText: {
        // fontFamily: Fonts.SF_Regular,
        color: '#F30606',
        fontWeight: 12,
        fontWeight: '500'
    },


})
