import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import CustomButton from '../../component/CustomButton'
import styles from './styles'
import AntIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';




export default function FoundDriver() {
    return (
        <View style={styles.container}>
            <View>

                <ImageBackground source={require('../../Assets/Images/map.png')} style={{ height: '70%', }} />

            </View>
            <View style={styles.view_driver}>
                <Text style={styles.text_driver}>We got you driver!</Text>
                <Text style={styles.text_driverpick}>Driver will pick you in</Text>
                <Text style={styles.text_2min}>2 Mins</Text>

                <View style={styles.image_container}>
                    <Image source={require('../../Assets/Images/car1.png')} style={styles.image} />
                    <Text style={styles.text_toyota}>Toyota Rush</Text>
                    <Text>G13 026</Text>
                </View>
            </View>
            <View style={{ bottom: '80%', flexDirection: 'row', bottom: '50%' }}>
                <View>
                    <Image source={require('../../Assets/Images/man.jpg')} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 10 }} />
                </View>
                <View>
                    <Text style={styles.text_drick}>Derick Preach</Text>
                </View>
                <View style={styles.view_500}>
                    <Image source={require('../../Assets/Images/Path.png')} style={{ top: 5, width: 13, height: 13, right: 15 }} />
                    <Text style={{ paddingLeft: 5, right: 15, color: '#161616' }}>5.00</Text>
                    <Text style={{ fontWeight: 'bold', right: 15 }}>. Great Service</Text>
                    <View style={styles.touch_buttonview}>
                        <TouchableOpacity style={styles.button}>
                            <FIcon name="phone" color='#fff' size={20} style={{ margin: '25%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}>
                            <AntIcon name="message1" color='#fff' size={20} style={{ margin: '25%' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ top: -180 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <FAIcon name="dot-circle" color='#C1C1C1' size={26} style={{ margin: 10 }} />
                    <Text style={styles.text_loyal}>Loyal Heights 26</Text>
                </View>
                <View style={{ flexDirection: 'row', top: -10 }}>
                    <Image source={require('../../Assets/Images/Icon.png')} style={{ width: 25, height: 25, margin: 10, left: 5 }} />
                    <Text style={[styles.text_loyal, { marginLeft: '2%' }]}>New Fransico 8th</Text>
                </View>
                <View style={styles.input_view}>
                    <Image source={require('../../Assets/Images/note.png')} style={{ width: 15, height: 15, position: 'absolute', top: 40, marginLeft: '4%' }} />
                    <TextInput style={styles.input}
                        placeholder='Add Notes to driver' >
                    </TextInput>
                </View>
            </View>


        </View >
    )
}