import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'
import CustomInput from '../../component/CustomInput'
import CustomButton from '../../component/CustomButton'
import styles from './styles'
import CustomText from '../../component/CustomText'
import PhoneInput from "react-native-phone-number-input";
import CustomHeader from '../../component/CustomHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'

const Login = ({ navigation }) => {

    const [value, setValue] = React.useState('');
    const [formattedValue, setFormattedValue] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    const handleInputChange = (number) => {

        if (number > 10 && number < 15) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }

    };
    const handleLeftPress = () => {
        // Handle left button press
    };

    const handleRightPress = () => {
        // Handle right button press
        navigation.navigate('Register')
    };
    return (
        <View style={styles.container}>
            <View>
                <Reuse_Header
                    title="AoChlin"
                    leftIcon="arrow-back"
                    // leftText="Back"
                    onLeftPress={handleLeftPress}
                    onRightPress={handleRightPress}
                    rightText="Register"
                // rightIcon="heart"
                />
            </View>
            <View style={styles.Login_view}>
                <CustomText label='Login' style={{ fontWeight: 'bold', fontSize: 24, padding: 5 }} />
                <CustomText label=' Enter phone number below.' style={{ fontSize: 15 }} />
            </View>
            <View style={styles.phone_view}>
                <PhoneInput
                    defaultValue={value}
                    defaultCode="DM"
                    layout="first"
                    onChangeText={handleInputChange}
                    containerStyle={styles.container_outer}
                    textContainerStyle={styles.container_input}

                >
                    {/* {(props) => (
                        <TextInput
                            {...props}
                            maxLength={15} // Set the maximum length to 15
                            onChangeText={handleInputChange}
                        />
                    )} */}
                </PhoneInput>
                {isValid ? (
                    <TouchableOpacity style={styles.tickIconContainer}>
                        <Icon name="check" color='#AF0909' size={26} />
                    </TouchableOpacity>
                ) : (<TouchableOpacity style={styles.tickIconContainer}>
                    {/* <Icon name="times" color='#AF0909' size={26} /> */}
                </TouchableOpacity>)}
            </View>
            <View style={styles.button_view}>
                <CustomButton label={'Login'} onPress={() => navigation.navigate('Verification')} />
            </View>
        </View>
    )
}

export default Login


