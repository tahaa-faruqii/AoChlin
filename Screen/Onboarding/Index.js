import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../../Screen/Onboarding/styles'
import CustomText from '../../component/CustomText';
import CustomButton from '../../component/CustomButton';
import MIcon from 'react-native-vector-icons/MaterialIcons';
pages =
    [
        {
            backgroundColor: '#AF0909',
            image: <Image source={require('../../Assets/Images/onboard1.png')} />,
            title: 'Hi there,\nIntroducing AoChlin',
            subtitle: 'Our App designed to make your ride as safe and comfortable as possible.',
        },
        {
            backgroundColor: '#AF0909',
            image: <Image source={require('../../Assets/Images/onboard2.png')} />,
            title: 'Hi there,\nIntroducing AoChlin',
            subtitle: 'Our App designed to make your ride as safe and comfortable as possible.',
        },
        {
            backgroundColor: '#AF0909',
            image: <Image source={require('../../Assets/Images/onboard3.png')} />,
            title: 'Hi there,\nIntroducing AoChlin',
            subtitle: 'Our App designed to make your ride as safe and comfortable as possible.',
        }
    ]


export default function Index({ navigation }) {
    const Next = ({ ...props }) => (
        <CustomButton
            icon={<MIcon name='arrow-forward-ios' color="#AF0909" style={{ marginLeft: '30%' }} />}
            bottom={20}
            label={'Next'}
            textStyle={{ color: '#AF0909', zIndex: 2, marginLeft: '30%' }}
            style={{ backgroundColor: '#ffff', width: '140%', alignSelf: 'center', right: 90, bottomBarHighlight: 50, bottom: 50, flexDirection: 'row', }}
            containerViewStyle={{
                marginVertical: 10,
                // width: '80%',
                alignSelf: 'center', // Center the button horizontally

            }}
            fontWeight={'600'}
            {...props}
        />
    );
    const Done = ({ ...props }) => (
        <CustomButton label={'Get Started'}
            textStyle={{ color: '#AF0909', zIndex: 2 }}
            style={{ backgroundColor: '#ffff', width: '140%', alignSelf: 'center', right: 90, bottomBarHighlight: 50, bottom: 50 }}
            onPress={() => navigation.navigate('Home')}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
                // backgroundColor: backgroundColor(isLight),
            }}
            fontWeight={'600'}
            // textStyle={{ color: color(isLight) }}
            {...props}
        />
    );
    const Dots = ({ selected }) => {
        let backgroundColor;
        backgroundColor = selected ? '#ffff' : 'gray'
        return (
            <View
                style={{
                    // position: 'absolute',
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    marginHorizontal: 3,
                    backgroundColor,
                    right: '200%'
                }}
            />
        )
    }
    const renderTitle = (title) => (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderSubtitle = (subtitle) => (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1, }}>
            <Onboarding
                bottomBarHighlight={false}
                showSkip={false}
                DoneButtonComponent={Done}
                NextButtonComponent={Next}
                DotComponent={Dots}
                onDone={() => navigation.replace("Login")}
                pages={pages}
                titleStyles={styles.title}
                subTitleStyles={styles.subtitle}
                renderTitle={renderTitle}
                renderSubtitle={renderSubtitle}
            />
        </View>
    )
}