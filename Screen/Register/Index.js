import { View, Text, TextInput, TouchableOpacity, Modal, Image, } from 'react-native'
import React, { useState } from 'react'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../component/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register({ navigation }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleButtonPress = () => {
        if (isValidInput()) {
            // Perform the action when input fields are valid
            navigation.navigate('Verification');
        } else {
            // Show an alert when input fields are not valid
            setShowModal(true);
        }
    };
    const isValidInput = () => {
        // Perform validation logic here
        const isValidFullName = fullName.trim().length > 0;
        const isValidEmail = validateEmail(email);
        const isValidPassword = password.length >= 6;
        const isValidConfirmPassword = password === confirmPassword;

        return isValidFullName && isValidEmail && isValidPassword && isValidConfirmPassword;
    };

    const validateEmail = (email) => {
        // Email validation logic here
        // Return true if email is valid, false otherwise
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleLeftPress = () => {
        // Handle left button press
    };
    const handleRightPress = () => {
        // Handle right button press
    };
    return (
        <View>
            <View>
                <Reuse_Header
                    title="AoChlin"
                    leftIcon="arrow-back-sharp"
                    // leftText="Back"
                    onLeftPress={handleLeftPress}
                // onRightPress={handleRightPress}
                // rightIcon="heart"
                // rightText="Favorite"
                />
            </View>
            <View style={styles.var_view}>
                <Text style={styles.text_acc}>Create an Account</Text>
                <Text style={styles.text_phone}>Create AoChlin account and get early access of our best products, inspiration and many more</Text>
            </View>
            <View style={styles.form1_view}>
                <Text style={styles.text}>fullName</Text>
                <TextInput style={styles.input} placeholder='Your full name'
                    value={fullName}
                    onChangeText={setFullName}
                />
                {!fullName.trim() && <Text style={styles.errorMessage}>Invalid name</Text>}
            </View>
            <View style={styles.form1_view}>
                <Text style={styles.text}>Email address</Text>
                <TextInput style={styles.input} placeholder='Email address'
                    value={email}
                    onChangeText={setEmail}
                />
                {!validateEmail(email) && <Text style={styles.errorMessage}> Invalid email address</Text>}
            </View>
            <View style={styles.form1_view}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder='6 Character'
                    value={password}
                    onChangeText={setPassword}
                />
                {password.length < 6 && <Text style={styles.errorMessage}>Invalid Password </Text>}
            </View>
            <View style={styles.form1_view}>
                <Text style={styles.text}>Confirm password</Text>
                <TextInput style={styles.input} placeholder='6 Character'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                {password !== confirmPassword && <Text style={styles.errorMessage}>Invalid Confirm Passwords</Text>}
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    tintColors={{ true: '#AF0909', false: '#AF0909' }}
                    // value={isSelected}
                    // onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text>Send me email to get promo, offers and more</Text>
            </View>
            <View style={styles.button_view}>
                <CustomButton label={'Create Account'} //onPress={handleButtonPress} 
                    onPress={() => navigation.navigate('Home')}
                />
                {/* <Text style={{ paddingTop: 5 }}>
                    by creating an account, you agree to our’s
                    Privacy Policy and Terms of Use.
                </Text> */}
                <Text style={{ paddingTop: 5 }}>
                    by creating an account, you agree to our&apos;s{" "}
                    <TouchableOpacity >
                        <Text style={styles.linkText}>Privacy Policy</Text>
                    </TouchableOpacity>{" "}
                    and{" "}
                    <TouchableOpacity >
                        <Text style={styles.linkText}>Terms of Use</Text>
                    </TouchableOpacity>
                    .
                </Text>
            </View>
            <Modal visible={showModal} animationType="slide">
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                        <Icon name="cross" size={30} color={'#AF0909'} />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Alert</Text>
                    {/* <MCIcon name="error-outline" size={30} color={'#AF0909'} /> */}

                    <View>
                        <Text style={{ fontSize: 24, color: '#000' }}>Required information is uncomplete</Text>
                        {/* Additional content for the alert */}
                    </View>
                </View>
            </Modal>
        </View>
    )
}