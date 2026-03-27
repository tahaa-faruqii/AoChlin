import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { Color } from '../Assets/theme'
import { RightArrow } from '../Assets/svg'
import { useNavigation } from '@react-navigation/native'
import MIcon from 'react-native-vector-icons/MaterialIcons';
const CustomHeader = ({ label, style }) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.headerItem, style]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MIcon name="arrow-back-ios" color={'#fff'} size={22} />
            </TouchableOpacity>
            <Text style={[styles.text, style]}>{label}</Text>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    headerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        paddingTop: '8%'
    },
    text: {
        color: '#00000',
        fontSize: 21,
        fontWeight: '700',
        marginLeft: '5%',
        paddingVertical: '3%',
    }
})