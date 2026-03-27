import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header_view: {

    },

    Login_view: {
        margin: 10,
        padding: 10,
        marginTop: '15%',
        marginBottom: 30,
    },
    phone_view: {
        alignContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        marginTop: '10%'
    },
    container_outer: {
        // borderWidth: 2,
        borderRadius: 15,
        height: 50,
        alignItems: 'center',


    },
    container_input: {
        height: 50,
        // padding: -4,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#AF0909',
        // textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    button_view: {
        marginTop: '20%',
        paddingVertical: 20,
        width: '80%',
        alignSelf: 'center',
        // position: 'absolute',
        // bottom: '5%'
    },
    tickIconContainer: {
        position: 'absolute',
        // marginLeft: '10%',
        justifyContent: 'space-around',
        right: 40
    }


})
export default styles