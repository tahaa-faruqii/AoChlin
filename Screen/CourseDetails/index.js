import { Image, ScrollView, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
// import { Back, Fav, People, Star, UI, User } from '../../Theme/Images'

import { styles } from './style'
import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import CustomButton from '../../component/CustomButton'


const CourseDetails = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Playlist')
    return (
        <View style={styles.container}>
            {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollStyle}> */}
            <Reuse_Header
                title="History"
                leftIcon="arrow-back"
                color={'red'}
                // onLeftPress={handleLeftPress}
                style={{ backgroundColor: '#F1F1F1' }}
                iconstyle={{ backgroundColor: '#fff', borderRadius: 30, paddingLeft: 10 }}
            />
            {/* <View style={styles.card}>
                    <Image source={UI} style={styles.cardImage} />
                    <View style={styles.childCard}>
                        <Text style={styles.course}>Basic UI/UX Design</Text>
                        <View style={styles.bottomCard}>
                            // <Image source={require('../../Assets/Images/map1.png')} style={styles.userIcon} />
                            <Text style={styles.rating}>3.6 K students</Text>
                            <View style={styles.reviewSection}>
                                <Image source={Star} style={styles.userIcon} />
                                <Text style={styles.rating}>4.8 (471 reviews)</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.about}>About This Course</Text>

                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Suspendisse nulla tellus, dignissim id turpis sit amet, efficitur vehicula nisi. Morbi dignissim and malesuada arcu, ut pellentesque nisi mollis course.
                        <Text style={styles.readMore}> Read More…</Text>
                    </Text>
                </View> */}

            <View style={styles.buttonContainer}>
                {/* <CustomButton name={'Booked'}*/}


                <CustomButton
                 label={'Booked'} style={styles.button}
                    CustomStyle={activeTab === 'Booked' ? styles.button : styles.inActiveButton}
                    CustomTextStyle={activeTab === 'Booked' ? { ...styles.btnText, color: 'black' } : styles.inActiveBtnText}
                    onPress={() => setActiveTab('Booked')}
                />

                <CustomButton label={'Cancelled'} style={styles.button}
                    CustomStyle={activeTab === 'Cancelled' ? styles.button : styles.inActiveButton}
                    CustomTextStyle={activeTab === 'Cancelled' ? styles.btnText : styles.inActiveButton}
                    onPress={() => setActiveTab('Cancelled')} />

            </View>

            {activeTab === 'Cancelled' ? <Cancelled /> : <Booked />}

        </View>
    )
}

export default CourseDetails

const data = [
    {
        location: 'Lahore',
        time: 'At 12:30 AM',
        date: '22 June 2023',
        driver: 'Arslan Ali',
        price: '20000 Rs',
        status: 'Booked',
        car: 'AoChlin taxi'
    },
    {
        location: 'Lahore',
        time: 'At 12:30 AM',
        date: '22 June 2023',
        driver: 'Arslan Ali',
        price: '20000 Rs',
        status: 'Booked',
        car: 'AoChlin taxi'
    },
    // Add more items as needed
];

const Booked = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F1F1F1', }}>

            <FlatList
                data={data}
                style={styles.flatPlaylist}
                // ListHeaderComponentStyle=FlatListHedear
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.playlist}>
                            <View style={{ backgroundColor: '#fff', width: '85%', alignSelf: 'center', marginTop: '5%', borderRadius: 20, padding: 10 }}>

                                <View style={styles.map_view}>
                                    <View style={styles.location_Container}>
                                        <Text style={styles.text_location}>{item.location}</Text>
                                    </View>
                                    <View style={styles.time_view}>
                                        <Text style={styles.timiing}>{item.time}</Text>
                                        <Text style={styles.courseList}>{item.date}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image source={require('../../Assets/Images/map1.png')} style={{ height: 200, width: 300, alignSelf: 'center' }} />
                                </View>
                                <View style={styles.map_view}>
                                    <View style={styles.car_Container}>
                                        <Text style={styles.text_car}>{item.car}</Text>
                                        <Text style={styles.text_name}>Driver name</Text>
                                        <Text style={styles.text_driver}>{item.driver}</Text>

                                    </View>
                                    <View style={styles.price_view}>
                                        <Text style={styles.courseList}>Prices      </Text>
                                        <Text style={styles.timiing}>{item.price}</Text>
                                        <Text style={styles.courseList}>{item.status}   </Text>

                                    </View>
                                </View>
                            </View>
                            <View>

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View >

    )
}

const ReviewData = [
    { name: 'Gibson Montgomery', date: '2 Jan 2023', message: "Praesent aliquam, mauris eu tristique porttitor, lacus tellus viverra enim, ut venenatis leo mauris quis." },
    { name: 'Tonny Stark', date: '15 Aug 2023', message: "Praesent aliquam, mauris eu tristique porttitor, lacus tellus viverra enim, ut venenatis leo mauris quis." },
    { name: 'Gibson Montgomery', date: '14 Feb 2023', message: "Praesent aliquam, mauris eu tristique porttitor, lacus tellus viverra enim, ut venenatis leo mauris quis." },
]

// const StarData = [{ img: Star }, { img: Star }, { img: Star }, { img: Star }, { img: Star }]
const Cancelled = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.reviewContainer}>
                <Text style={styles.review}>Reviews </Text>
                <Text style={styles.review}>(42)</Text>
            </View>

            <FlatList
                // data={ReviewData}
                style={styles.flatPlaylist}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.reviewCard}>
                            <View style={styles.reviewChildCard}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={User} style={styles.reviewerImage} />
                                    <View style={{ flexDirection: 'column', paddingLeft: '6%' }}>
                                        <Text style={styles.reviewerName}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            {StarData.map((item) => {
                                                return (
                                                    <Image source={item.img} style={styles.startIcon} />
                                                )
                                            })}
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                            <Text style={styles.reviewDescription}>{item.message}</Text>
                        </View>
                    )
                }}
            />

        </View>
    )
}
