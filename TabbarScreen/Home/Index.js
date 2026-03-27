import React from 'react'
import { Image, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import CustomButton from '../../component/CustomButton'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import AntIcon from 'react-native-vector-icons/AntDesign';

const DATA = [
    {
        image: require('../../Assets/Images/car1.png'),
        title: 'Taxi',
    },
    {
        image: require('../../Assets/Images/car2.png'),
        title: 'Cars',
    },
    {
        image: require('../../Assets/Images/car3.png'),
        title: 'luxury',
    },
    {
        image: require('../../Assets/Images/car4.png'),
        title: 'Electric',
    },
];
const DATA1 = [
    {
        image: require('../../Assets/Images/cloud1.jpg'),
        title: 'Taxi',
    },
    {
        image: require('../../Assets/Images/cloud2.jpg'),
        title: 'Cars',
    },
    {
        image: require('../../Assets/Images/cloud3.jpg'),
        title: 'luxury',
    },

];
export default function Home({ navigation }) {

    return (
        <View style={styles.container} >
            <View>
                <Reuse_Header
                    title="AoChlin"

                />
            </View>
            <View style={styles.toptext_view}>
                <View>
                    <Text style={styles.leftText}>Good Morning</Text>
                    <Text style={styles.jacobtext}>Jacob Dom</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../Assets/Images/pic.jpg')} style={styles.image} />
                </View>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Drive me somewhere' />
            </View>
            <View style={styles.Banner_Container}>
                <Image source={require('../../Assets/Images/Banner.jpg')} style={styles.banner} />
            </View>
            <View style={styles.recharge_container}>
                <Text style={styles.text}>Draypay</Text>
                <Text style={styles.text}>$12,823.10</Text>
                <View style={styles.button_view}>
                    <TouchableOpacity style={styles.button_rechrge}>
                        <Text style={{ textAlign: 'center', top: 10 }}>Recharge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_pay}>
                        <Text style={{ textAlign: 'center', top: 10 }}>Pay</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <FlatList
                data={DATA}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.flat_buton_style}>
                            <View>
                                <Image source={item.image} style={{ height: 50, width: 60, justifyContent: "center", alignItems: 'center' }} />
                            </View>
                            <Text style={{ padding: 10, margin: 12 }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 10, padding: 2, margin: 5 }}>
                <Text style={{ fontSize: 16, color: "#000", fontWeight: 'bold', }}>Trending Places</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Findplaces')}>
                    <AntIcon name="right" color='#AF0909' size={26} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA1}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.flat_buton_style2}>
                            <View>
                                <Image source={item.image} style={{
                                    height: '100%', width: 100, justifyContent: "center", alignItems: 'center',
                                    borderRadius: 10,
                                }} />
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
