import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import styles from './styles';
import CustomButton from '../../component/CustomButton';
export default function History() {

    const handleLeftPress = () => {
        // Handle left button press
    };
    const [activeTab, setActiveTab] = useState('Booked')
    return (
        <View>
            <View>
                <View style={styles.buttonContainer}>
                    {/* <CustomButton name={'Booked'}*/}
                    <CustomButton label={'Booked'} style={styles.button}
                        CustomStyle={activeTab === 'Booked' ? styles.button : styles.inActiveButton}
                        CustomTextStyle={activeTab === 'Booked' ? styles.btnText : styles.inActiveBtnText}
                        onPress={() => setActiveTab('ReusableFlatlist')}
                    />
                    <CustomButton label={'Booked'} style={styles.button}
                        CustomStyle={activeTab === 'Cancelled' ? styles.button : styles.inActiveButton}
                        CustomTextStyle={activeTab === 'Cancelled' ? styles.btnText : styles.inActiveButton}
                        onPress={() => setActiveTab('Cancelled')} />

                </View>
                {activeTab === 'Cancelled' ? <Cancelled /> : <Booked />}
            </View>

        </View>
    )
}

const Booked = () => {
    const data = [
        {
            location: 'Lahore',
            time: 'At 12:30 AM',
            date: '22 June 2023',
            driver: 'Arslan Ali',
            price: '20000 Rs',
            status: 'Booked',
        },
        // Add more items as needed
        {
            location: 'Lahore',
            time: 'At 12:30 AM',
            date: '22 June 2023',
            driver: 'Arslan Ali',
            price: '20000 Rs',
            status: 'Booked',
        },
    ];

    return (
        // <View style={{ backgroundColor: 'gray' }}>
        // <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', marginLeft: '5%' }}>
        //     <Text style={{ marginTop: '2%', marginLeft: '5%', fontWeight: 'bold', fontSize: 18 }}>{item.location}</Text>
        //     <View style={{ marginRight: '12%' }}>
        //         <Text>{item.time}</Text>
        //         <Text>{item.date}</Text>
        //     </View>
        // </View>
        // <View style={{ height: '50%', justifyContent: 'center' }}>
        //     <Image source={require('../../Assets/Images/map1.png')} style={{ width: '80%', alignSelf: 'center', height: '100%', backgroundColor: '#000' }} />
        // </View>
        // <View style={{ top: 10, flexDirection: 'row', justifyContent: 'space-between', width: '92%', marginLeft: '10%' }}>
        //     <View>
        //         <Text style={{ fontWeight: 'bold' }}>Aochlin Taxi</Text>
        //         <Text>Driver Name</Text>
        //         <Text>{item.driver}</Text>
        //     </View>
        //     <View style={{ marginRight: '12%' }}>
        //         <Text>Price</Text>
        //         <Text style={{ fontSize: 16, color: 'gray', fontWeight: 'bold' }}>{item.price}</Text>
        //         <Text style={{ fontWeight: 'bold', color: '#77AB16' }}>{item.status}</Text>
        //     </View>
        // </View>
        // </View>

        <View style={{ backgroundColor: 'gray' }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'white', margin: 10 }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', marginLeft: '5%' }}>
                            <Text style={{ marginTop: '2%', marginLeft: '5%', fontWeight: 'bold', fontSize: 18 }}>{item.location}</Text>
                            <View style={{ marginRight: '12%' }}>
                                <Text>{item.time}</Text>
                                <Text>{item.date}</Text>
                            </View>
                        </View>
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <Image source={require('../../Assets/Images/map1.png')} style={{ width: '80%', alignSelf: 'center', height: '100%', backgroundColor: '#000' }} />
                        </View>
                        <View style={{ top: 10, flexDirection: 'row', justifyContent: 'space-between', width: '92%', marginLeft: '10%' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Aochlin Taxi</Text>
                                <Text>Driver Name</Text>
                                <Text>{item.driver}</Text>
                            </View>
                            <View style={{ marginRight: '12%' }}>
                                <Text>Price</Text>
                                <Text style={{ fontSize: 16, color: 'gray', fontWeight: 'bold' }}>{item.price}</Text>
                                <Text style={{ fontWeight: 'bold', color: '#77AB16' }}>{item.status}</Text>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ alignItems: 'center' }}
            // numColumns={3}
            />
        </View>
    )
}

const Cancelled = () => {
    return (
        <View>
            <Text>Cancelled</Text>

        </View >
    )
}