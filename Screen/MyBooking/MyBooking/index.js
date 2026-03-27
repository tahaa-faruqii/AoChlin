import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Reuse_Button, Reuse_Header } from '../../Components'
import { Colors, Icons } from '../../Theme'
import Reuse_BookingCard from '../../Components/Reuse_BookingCard';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

const buttonData = [
    { name: 'Rent', type: 'rent' },
    { name: 'Car Sharing', type: 'carSharing' },
];
const MapData = [
    { label: 'Active', status: 'Active' },
    { label: 'Completed', status: 'Completed' },
    { label: 'Canceled', status: 'Cancelled' },
];
const MyBooking = () => {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState('rent')
    const [active, setActive] = useState({
        rent: 'Active',
        carSharing: 'Active',
    });

    const handleTabPress = (type) => {
        setActiveTab(type);
    };

    const handleMapButtonPress = (status) => {
        setActive((prevActive) => ({
            ...prevActive,
            [activeTab]: status,
        }));
    };

    const renderComponent = () => {
        if (activeTab === 'rent') {
            return active.rent === 'Active' ? <Active /> : active.rent === 'Completed' ? <Completed /> : <Cancelled />;
        } else if (activeTab === 'carSharing') {
            return active.carSharing === 'Active' ? <SharingActive /> : active.carSharing === 'Completed' ? <SharingCompleted /> : <SharingCancelled />;
        }
        return null;
    };
    return (
        <View style={styles.container}>
            <Reuse_Header
                title="My Booking"
                LeftComp={<Icons type='AntDesign' name={'arrowleft'} size={25} color={Colors.black} />}
                onLeftPress={() => navigation.goBack()}
            />
            {/* <View style={styles.buttonContainer}>
                {buttonData.map((item, index) => (
                    <Reuse_Button
                        key={index}
                        name={item.name}
                        CustomStyle={activeTab === item.type ? styles.activeButton : styles.inActiveButton}
                        CustomTextStyle={activeTab === item.type ? styles.activeBtnText : styles.inActiveBtnText}
                        onPress={() => setActiveTab(item.type)}
                    />
                ))}

            </View> */}

            <View style={styles.buttonContainer}>
                {buttonData.map((item, index) => (
                    <Reuse_Button
                        key={index}
                        name={item.name}
                        CustomStyle={activeTab === item.type ? styles.activeButton : styles.inActiveButton}
                        CustomTextStyle={activeTab === item.type ? styles.activeBtnText : styles.inActiveBtnText}
                        onPress={() => handleTabPress(item.type)}
                    />
                ))}
            </View>

            <View style={styles.mapButtonContainer}>
                {MapData.map((button) => (
                    <TouchableOpacity
                        key={button.label}
                        style={[styles.button, active[activeTab] === button.status ? styles.mapActiveButton : null]}
                        onPress={() => handleMapButtonPress(button.status)}
                    >
                        <Text style={[styles.buttonText, active[activeTab] === button.status ? styles.mapActiveButtonText : null]}>
                            {button.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {renderComponent()}
        </View>
    )
}
export default MyBooking

const Active = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={ActiveData}
                contentContainerStyle={{ marginTop: '2%', paddingBottom: '4%' }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <Reuse_BookingCard onPress={() => navigation.navigate('BookingActiveDetails')}
                            key={index}
                            id={item.id}
                            bookingDateTime={item.bookingDateTime}
                            location={item.location}
                            car={item.car}
                            departureDateTime={item.departureDateTime}
                            returnDateTime={item.returnDateTime}
                        />
                    )
                }}
            />
        </View>
    )
}
const ActiveData = [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' }]

const Completed = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={CompletedData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: '4%' }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const { month, data } = item
                    return (
                        <View style={styles.childContainer}>
                            <View style={styles.monthContainer}>
                                <Text style={styles.today}>{month}</Text>
                                <View style={styles.line} />
                            </View>
                            {data.map((item, index) => {
                                return (
                                    <Reuse_BookingCard onPress={() => navigation.navigate('BookingCompleteDetails')}
                                        style={styles.bookingCardStyle}
                                        key={index}
                                        id={item.id}
                                        bookingDateTime={item.bookingDateTime}
                                        location={item.location}
                                        car={item.car}
                                        departureDateTime={item.departureDateTime}
                                        returnDateTime={item.returnDateTime}
                                    />
                                )
                            })}
                        </View>
                    )
                }}
            />
        </View>
    )
}

const CompletedData = [
    {
        month: 'May', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
    {
        month: 'April', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
]

const Cancelled = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={CancelledData}
                contentContainerStyle={{ paddingBottom: '4%' }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const { month, data } = item
                    return (
                        <View style={styles.childContainer}>
                            <View style={styles.monthContainer}>
                                <Text style={styles.today}>{month}</Text>
                                <View style={styles.line} />
                            </View>
                            {data.map((item, index) => {
                                return (
                                    <Reuse_BookingCard style={styles.bookingCardStyle}
                                        key={index}
                                        id={item.id}
                                        bookingDateTime={item.bookingDateTime}
                                        location={item.location}
                                        car={item.car}
                                        departureDateTime={item.departureDateTime}
                                        returnDateTime={item.returnDateTime}
                                    />
                                )
                            })}
                        </View>
                    )
                }}
            />
        </View>
    )
}

const CancelledData = [
    {
        month: 'May', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
    {
        month: 'April', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
]

const SharingActive = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={SharingActiveData}
                contentContainerStyle={{ marginTop: '2%', paddingBottom: '4%' }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <Reuse_BookingCard onPress={() => navigation.navigate('SharingActiveDetails')}
                            key={index}
                            id={item.id}
                            bookingDateTime={item.bookingDateTime}
                            location={item.location}
                            car={item.car}
                            departureDateTime={item.departureDateTime}
                            returnDateTime={item.returnDateTime}
                        />
                    )
                }}
            />
        </View>
    )
}
const SharingActiveData = [{ id: '654321', bookingDateTime: 'May 12, 10:00 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' }]

const SharingCompleted = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={SharingCompletedData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: '4%' }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const { month, data } = item
                    return (
                        <View style={styles.childContainer}>
                            <View style={styles.monthContainer}>
                                <Text style={styles.today}>{month}</Text>
                                <View style={styles.line} />
                            </View>
                            {data.map((item, index) => {
                                return (
                                    <Reuse_BookingCard onPress={() => navigation.navigate('SharingCompleteDetails')}
                                        style={styles.bookingCardStyle}
                                        key={index}
                                        id={item.id}
                                        bookingDateTime={item.bookingDateTime}
                                        location={item.location}
                                        car={item.car}
                                        departureDateTime={item.departureDateTime}
                                        returnDateTime={item.returnDateTime}
                                    />
                                )
                            })}
                        </View>
                    )
                }}
            />
        </View>
    )
}
const SharingCompletedData = [
    {
        month: 'Aug', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
    {
        month: 'April', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
]

const SharingCancelled = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={SharingCancelledData}
                contentContainerStyle={{ paddingBottom: '4%' }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const { month, data } = item
                    return (
                        <View style={styles.childContainer}>
                            <View style={styles.monthContainer}>
                                <Text style={styles.today}>{month}</Text>
                                <View style={styles.line} />
                            </View>
                            {data.map((item, index) => {
                                return (
                                    <Reuse_BookingCard style={styles.bookingCardStyle}
                                        key={index}
                                        id={item.id}
                                        bookingDateTime={item.bookingDateTime}
                                        location={item.location}
                                        car={item.car}
                                        departureDateTime={item.departureDateTime}
                                        returnDateTime={item.returnDateTime}
                                    />
                                )
                            })}
                        </View>
                    )
                }}
            />
        </View>
    )
}
const SharingCancelledData = [
    {
        month: 'May', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
    {
        month: 'April', data:
            [{ id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            { id: '123456', bookingDateTime: 'May 10, 09:30 AM', location: '2464 Royal Ln. Mesa', car: 'Audi A6', departureDateTime: '10/3/23 - 09:30 AM', returnDateTime: '10/3/23 - 09:30 AM' },
            ]
    },
]