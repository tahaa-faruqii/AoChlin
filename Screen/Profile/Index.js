import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Reuse_touchbutton from '../../component/Reuse_touchbutton'

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.upperview}>
                <Text style={styles.text_profile}>Profile</Text>
            </View>
            <View style={styles.image_container}>
                <Image source={require('../../Assets/Images/man.jpg')} style={styles.image} />
                <Text style={styles.text_jacob}>Jacob Dom</Text>
                <Text >Jacob_dom@gmail.com</Text>
            </View>
            <View style={styles.balance_container}>
                <Text style={styles.text_balance}>Balance</Text>
            </View>
            <View>
                <Reuse_touchbutton label={'Account Visibility'} textstyles={styles.fontstyles} rightText={"Active"} />
                <Reuse_touchbutton label={'Card Management'} textstyles={styles.fontstyles} rightIcon={'right'} />
            </View>
            <View style={styles.account_container}>
                <Text style={styles.text_account}>Account Setting</Text>
            </View>
            <View>
                <Reuse_touchbutton label={'Payment Management'} textstyles={styles.fontstyles} rightIcon={'right'} />
                <Reuse_touchbutton label={'Help'} textstyles={styles.fontstyles} rightIcon={'right'} />
                <Reuse_touchbutton label={'Address'} textstyles={styles.fontstyles} rightIcon={'right'} />
                <Reuse_touchbutton label={'Settings'} textstyles={styles.fontstyles} rightIcon={'right'} />
            </View>
        </View>
    )
}