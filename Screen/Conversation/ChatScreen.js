import { View, Text, StyleSheet, ImageBackground, FlatList, KeyboardAvoidingView, Platform, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

// import MessageScreen from './MessageScreen';
import message from '../../Assets/data/messages.json';
import MessageScreen from './MessageScreen';
import InputBox from '../../component/InputBox';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EnIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/Feather';



export default function Conversation() {
    // const route = useRoute();
    // const navigation = useNavigation();
    // navigation.setOptions({ title: route.params });
    // useEffect(() => {
    //     navigation.setOptions({ title: route.params.name });
    // }, [route.params]);

    // console.log(message)

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}>
            <Reuse_Header
                title="AoChlin"
            />
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchIcon}>
                    <AntIcon name="arrowleft" color="#AF0909" size={20} />
                </TouchableOpacity>
                <Image source={require('../../Assets/Images/man.jpg')} style={styles.image} />
                <Text style={styles.text}>Derick Preach</Text>
                <View style={styles.rightContainer}>
                    <View style={styles.iconContainer}>
                        <EnIcon name="dot-single" color="green" size={20} />
                    </View>
                    <Text style={styles.onlineText}>online</Text>
                </View>
                <View style={styles.rightContainericon}>
                    <FIcon name="phone" color="#000" size={20} />

                </View>
            </View>
            <ImageBackground source={require('../../Assets/Images/BG.png')} style={styles.bg}>


                <FlatList
                    data={message}
                    renderItem={({ item }) => <MessageScreen message={item} />}
                    style={styles.list}
                    inverted
                />

                <View style={{ bottom: 10, paddingTop: '30%' }}>
                    <InputBox />
                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    bg: {
        flex: 1,
        height: '70%',
        justifyContent: 'center',
        // alignSelf: 'center'
    },
    list: {
        padding: 10,
        // height: '70%',
    },
    touchIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: {
        top: -10,
        flexDirection: 'column',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    rightContainer: {
        right: '30%',
        top: '50%',
        flexDirection: 'row',
        alignSelf: 'flex-start',

    },
    onlineText: {
        fontSize: 18,
        fontSize: 12,
        color: '#000',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightContainericon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '5%'
    },
});
