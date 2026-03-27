import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import FIcon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import PhoneInput from "react-native-phone-number-input";
import { Flag, getCountryName } from 'react-native-flags';


export default function PaymentMethod({ value }) {
    // const countryCode = value.substring(0, 2); // Extract the first two characters of the value as the country code
    // const countryName = getCountryName(countryCode); // Get the country name based on the country code

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
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Reuse_Header
                    title="Add Payment Method"
                    leftIcon="arrow-back"
                    color={'red'}
                    onLeftPress={handleLeftPress}
                />
            </View>
            {/* <View style={styles.card_Container}> */}
            <Image source={require('../../Assets/Images/card.png')} style={styles.card} resizeMode='contain' />
            {/* </View> */}
            <View style={styles.form1_view}>
                <Text style={styles.text}>Card Number</Text>
                <Text style={{ top: 30, alignSelf: 'flex-end', right: '15%', color: '#AF0909', fontWeight: 'bold' }}>Draypay</Text>
                <TextInput style={styles.input} placeholder='**** **** 8000 2486'
                // value={fullName}
                // onChangeText={setFullName}
                />
            </View>
            <View style={styles.form1_view}>
                <Text style={styles.text}>Cardholder Name</Text>
                <TextInput style={styles.input} placeholder='Jacob dom'
                // value={fullName}
                // onChangeText={setFullName}
                />
            </View>
            {/* <View style={styles.countryInfo}>
                <Flag code={countryCode} size={24} />
                <Text>{countryName}</Text>
            </View> */}
            <View style={{ alignSelf: 'center', width: '92%', marginTop: '5%' }}>
                <PhoneInput
                    defaultValue={value}
                    defaultCode="DM"
                    layout="first"
                    onChangeText={handleInputChange}
                    containerStyle={styles.container_outer}
                    textContainerStyle={styles.container_input}
                    flagStyle={styles.flag}

                />
            </View>
            <View style={styles.date_container}>
                <View >
                    <Text>Expiry Date</Text>
                    <TextInput style={styles.input2} placeholder='08 / 2023' placeholderTextColor={"#000"} />
                </View>
                <View>
                    <Text>CVV / CVC</Text>
                    <TextInput style={styles.input2} placeholder='834' placeholderTextColor={"#000"} />
                </View>
            </View>
        </View >
    )
}