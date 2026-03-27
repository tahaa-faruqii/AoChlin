import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import { Color } from '../Assets/theme'
// import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({ label, onPress, textStyle, style, icon, fontWeight, }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[{ color: "#fff", fontWeight: fontWeight ? fontWeight : 'bold', fontSize: 18, }, textStyle]}>{label}</Text>
            {/* {icon} */}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        height: 50,
        // width: '80%',
        backgroundColor: '#AF0909',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '4%',
        borderRadius: 50,

    }
})