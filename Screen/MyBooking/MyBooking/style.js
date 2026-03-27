import { StyleSheet } from "react-native"
import { Colors, Fonts } from "../../Theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '92%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: '4%',
        justifyContent: 'space-between',
    },
    activeButton: {
        height: 50,
        width: '45%',
        backgroundColor: Colors.primary,
        borderRadius: 30,
    },
    inActiveButton: {
        height: 50,
        width: '45%',
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderRadius: 30,
        borderColor: Colors.grey,
    },
    activeBtnText: {
        fontFamily: Fonts.Montserrat_Medium,
        color: Colors.white,
        fontSize: 14,
        fontWeight: '500',
    },
    inActiveBtnText: {
        fontFamily: Fonts.Montserrat_Medium,
        color: Colors.grey,
        fontSize: 14,
        fontWeight: '500'
    },
    mapButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        // justifyContent: 'space-between',
        padding: 10,
    },
    button: {
        padding: 10,
        width: '33%',
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGrey,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        color: Colors.lightGrey,
        fontFamily: Fonts.Montserrat_SemiBold,
    },
    mapActiveButton: {
        borderBottomWidth: 2,
        color: Colors.primary,
        fontFamily: Fonts.Montserrat_SemiBold,
        borderColor: Colors.primary,
    },
    mapActiveButtonText: {
        color: Colors.primary,
        fontFamily: Fonts.Montserrat_SemiBold,
        fontSize: 14,
        fontWeight: '600',
        alignSelf: 'center',
    },
    today: {
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 15,
        color: Colors.lightGrey,
        paddingLeft: '2%'

    },
    childContainer: {
        marginTop: '1%'
    },
    line: {
        height: 1.5,
        backgroundColor: Colors.lightGrey,
        alignSelf: 'center',
        flex: 1,
        marginLeft: 10,
    },
    monthContainer: {
        flexDirection: 'row',
        marginHorizontal: '4%',
        paddingVertical: '1%'
    },
    bookingCardStyle: {
        borderWidth: 0,
        elevation: 2
    },


})