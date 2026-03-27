import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButton from '../../component/CustomButton'
import AntIcon from 'react-native-vector-icons/AntDesign';

export default function Findingdriver() {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#F1F1F1', flex: 1, }}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#FAFAFA', borderRadius: 20, margin: 10, justifyContent: 'center', }}>
                    <AntIcon name="arrowleft" color='#AF0909' size={20} style={{ margin: '25%' }} />
                </TouchableOpacity>
                <ImageBackground source={require('../../Assets/Images/map.png')} style={{ top: 20, height: '80%', }} />

            </View>
            <View style={styles.view_driver}>
                <Text style={styles.text_driver}>Finding your driver</Text>
                <Text style={{ color: 'gray', paddingTop: 10 }}>Please wait a while...</Text>
            </View>
            <View style={styles.button_view}>
                <CustomButton label={'Cancel Booking'} onPress={() => navigation.navigate('')} />
            </View>
        </View>
    )
}