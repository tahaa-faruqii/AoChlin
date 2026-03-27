import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import FIcon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../component/CustomButton';
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header';
import AntIcon from 'react-native-vector-icons/AntDesign';



const DATA = [
    {
        id: 1,
        name: 'AoChlin Taxi',
        price: '~$12',
        image: require('../../Assets/Images/car1.png'),
        time: 'ETA 12.04.12 Mins'

    },
    {
        id: 2,
        name: 'AoChlin Cars',
        price: '~$18',
        time: 'ETA 12.04.12 Mins',
        image: require('../../Assets/Images/car2.png')
    },
    {
        id: 3,
        name: 'AoChlin Luxury',
        price: '~$12',
        image: require('../../Assets/Images/car3.png'),
        time: 'ETA 12.04.12 Mins'

    },
    {
        id: 4,
        name: 'AoChlin Electric',
        price: '~$95',
        image: require('../../Assets/Images/car4.png'),
        time: 'ETA 12.04.12 Mins'

    },

];
export default function Pickride() {

    const handleLeftPress = () => {
        // Handle left button press
    };
    // const renderItem = ({ item, index }) => {
    //     return (

    //         <View style={styles.listContainer}>
    //             <View style={{ position: 'absolute', alignItems: 'flex-start', }}>
    //                 <Image source={item.image} style={styles.item_image} />
    //                 <Text style={styles.nameText}>{item.name}</Text>
    //                 <Text style={styles.disText}>{item.time}</Text>
    //             </View>
    //             <Text style={styles.priceText}>{item.price}</Text>
    //         </View>


    //     );
    // };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../Assets/Images/map.png')} style={{ height: '70%' }} >
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#FAFAFA', borderRadius: 20, margin: 10, justifyContent: 'center', }}>
                    <AntIcon name="arrowleft" color='#AF0909' size={20} style={{ margin: '25%' }} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.top_container}>
                <Text style={styles.top_text}>Pick a ride</Text>
                <Text style={{ color: 'gray' }}>Pick start and destination Location</Text>
            </View>
            <ScrollView>

                <View>
                    <FlatList
                        // horizontal={true}
                        data={DATA}
                        renderItem={({ item }) => (
                            <View style={styles.listContainer}>
                                <Image source={item.image} style={styles.item_image} />
                                <View style={styles.list_view}>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                    <Text style={styles.disText}>{item.time}</Text>
                                </View>
                                <Text style={styles.priceText}>{item.price}</Text>
                            </View>
                        )}
                    />

                </View>
                <View style={{ flexDirection: 'row', margin: 10, borderTopWidth: 0.25, padding: 10, }}>
                    <Text style={styles.text_drag}>Drapay</Text>
                    <Text style={{ fontWeight: "bold", color: '#000' }}>****1234</Text>
                    <TouchableOpacity style={styles.button_change}>
                        <Text style={{ fontSize: 16, color: '#000' }}>Change</Text>
                        <FIcon name="right" color='#000' size={16} style={{ top: 2, }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.button_view}>
                    <CustomButton label={'Book a Ride'} onPress={() => navigation.navigate('')} />
                </View>
            </ScrollView>
        </View >
    )
} 