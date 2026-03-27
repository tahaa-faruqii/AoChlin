// import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header';
import styles from './styles';
import React, { useRef } from 'react';
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../../component/CustomButton';
export default function Verification({ navigation }) {
  let otpInput = useRef(null);
  const handleLeftPress = () => {
    // Handle left button press
  };

  const handleRightPress = () => {
    // Handle right button press
  };

  return (
    <View>
      <Reuse_Header
        title="AoChlin"
        leftIcon="arrow-back"
        // leftText="Back"
        onLeftPress={handleLeftPress}
      // onRightPress={handleRightPress}
      // rightIcon="heart"
      // rightText="Favorite"
      />
      <View style={styles.var_view}>
        <Text style={styles.text_var}>Verification</Text>
        <Text style={styles.text_phone}>Enter the code we’ve sent to your phone number +1 123 456 789</Text>
      </View>
      <View>
        <OTPTextView
          handleTextChange={e => { }}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={4}
          tintColor='#AF0909'

        />

      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={styles.text_receive}>Didn’t receive code?</Text>
        <TouchableOpacity>
          <Text style={styles.text_resend}>Resend code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_view}>
        <CustomButton label={'Verify'} onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

;
