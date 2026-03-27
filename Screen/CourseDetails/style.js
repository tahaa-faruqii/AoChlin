import { StyleSheet } from 'react-native';
// import { Colors, Fonts } from '../../Theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },


    inActiveBtnText: {
        // fontFamily: Fonts.SF_Regular,
        color: '#F30606',
        fontWeight: 12,
        fontWeight: '500'
    },

    buttonContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 60,
        width: '100%',
        borderRadius: 12,
        alignItems: 'center',
        paddingHorizontal: '2%',
        // marginTop: '8%',
        backgroundColor: '#D9D9D9',

    },
    button: {
        width: '40%',
        // backgroundColor: 'white',
        borderRadius: 15,
        height: 40,
        borderBottomWidth: 2,
        paddingVertical: 5,
        borderBottomColor: 'black', // Added to set the initial borderBottomColor to transparent
    },
    activeButton: {
        borderBottomColor: '#77AB16',
    },
    inActiveButton: {
        backgroundColor: 'transparent',
    },
    btnText: {
        color: '#77AB16',
        fontSize: 12,
        fontWeight: '500',
    },
    activeButtonText: {
        color: '#F30606',
    },
    map_view: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time_view: {
        marginLeft: '50%',
        alignItems: 'flex-end',
        alignSelf: 'center'
    },
    location_Container: {
        margin: 10,
        marginLeft: '10%'
    },
    text_location: {
        fontSize: 18,
        fontWeight: '900',
    },
    price_view: {
        marginLeft: '45%',
        alignItems: 'flex-end',
        alignSelf: 'center',
        marginRight: '5%'
    },
    car_Container: {
        margin: 10,
        marginLeft: '10%'
    },
    text_car: {
        fontSize: 16,
        fontWeight: '900',
    }
})