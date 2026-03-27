// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// // import { Colors } from '../../Theme'
// import { useNavigation } from '@react-navigation/native'
// // import { Fav } from '../../Theme/Images'

// const Reuse_Header = (props) => {
//     const navigation = useNavigation()
//     return (
//         <View style={{ ...styles.header, ...props.headerStyle }} >
//             <TouchableOpacity onPress={props.onLeft}>
//                 <Image source={props.leftHeaderIcon} style={{ ...styles.icon, ...props.headerIcon }} />
//             </TouchableOpacity>
//             <Text style={{ ...styles.title, ...props.TextStyle }}>{props.title}</Text>
//             <TouchableOpacity onPress={props.onRight} >
//                 <Image source={props.rightHeaderIcon} style={{ ...styles.rightIcon, ...props.CustomRightIcon }} />
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default Reuse_Header

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingTop: '6%',
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: '600',
//         lineHeight: 19,
//         // color: Colors.black,
//     },
//     icon: {
//         height: 18,
//         width: 18
//     },
//     rightIcon: {
//         height: 20,
//         width: 20,
//         resizeMode: 'contain'
//     }
// })

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Reuse_Header = ({ title, leftIcon, leftText, onLeftPress, rightIcon, rightText, onRightPress, style, color, iconstyle }) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={[styles.leftContainer, iconstyle]} onPress={onLeftPress}>
                {leftIcon && <Icon name={leftIcon} size={20} color={color} />}
                {leftText && <Text style={styles.leftText}>{leftText}</Text>}
            </TouchableOpacity>
            <View style={{ marginLeft: '30%' }}>
                <Text style={styles.title}>{title}</Text>

            </View>
            <TouchableOpacity style={styles.rightContainer} onPress={onRightPress}>
                {rightText && <Text style={styles.rightText}>{rightText}</Text>}
                {rightIcon && <Icon name={rightIcon} size={20} color="black" />}
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 60,
        // backgroundColor: '#f2f2f2',
    },
    leftContainer: {
        height: 40,
        width: 40,
        alignItems: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',

    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',

    },
    leftText: {
        marginLeft: 8,
        fontSize: 16,
    },
    rightText: {
        left: 60,
        marginRight: 10,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
};

export default Reuse_Header;
