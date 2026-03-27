import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import styles from './styles';
import FIcon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    {
        id: 1,
        name: 'New Fransisco',
        price: '~$12',
        // image: require('../Assets/image1.jpg'),
        distance: '2.6 Km'

    },
    {
        id: 2,
        name: 'New York',
        price: '~$12',
        distance: '4.8 Km'
        // image: require('../Assets/image2.jpg'),
    },
    {
        id: 3,
        name: 'NewCastle',
        price: '~$12',
        // image: require('../Assets/image3.jpg'),
        distance: '12.8 Km'

    },
    {
        id: 4,
        name: 'Lorem Ipsum',
        price: '$95',
        // image: require('../Assets/image4.jpg'),
        distance: '2.6 Km'

    },

];

export default function Findplaces() {
    const handleLeftPress = () => {
        // Handle left button press
    };
    // const renderItem = ({ item, index }) => {
    //     return (

    //         <View style={styles.listContainer}>
    //             <View style={{ position: 'absolute', alignItems: 'flex-start', top: 20 }}>
    //                 <Text style={styles.nameText}>{item.name}</Text>
    //                 <Text style={styles.disText}>{item.distance}</Text>
    //             </View>
    //             <Text style={styles.priceText}>{item.price}</Text>
    //         </View>


    //     );
    // };
    return (
        <View style={styles.container}>
            <View>
                <Reuse_Header
                    title="AoChlin"
                    leftIcon="close"

                    onLeftPress={handleLeftPress}
                />
            </View>
            <View style={styles.top_container}>
                <Text style={styles.top_text}>Where are you going ?</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <FIcon name="dot-circle" color='#C1C1C1' size={26} style={{ margin: 10 }} />
                <Text style={styles.text_loyal}>Loyal Heights 26</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                {/* <FIcon name="dot-circle" color='#000' size={26} style={{ margin: 10 }} /> */}
                <Image source={require('../../Assets/Images/arrow.png')} style={{ width: 30, height: 30, margin: 8 }} />
                <Text style={styles.text_loyal}>New</Text>
            </View>
            <View style={{ margin: 10, marginLeft: '5%' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>RecentPlaces</Text>
            </View>
            <FlatList
                // horizontal={true}
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.listContainer}>
                        <View style={{ position: 'absolute', alignItems: 'flex-start', top: 20 }}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.disText}>{item.distance}</Text>
                        </View>
                        <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                )}
            />
        </View >
    )
}