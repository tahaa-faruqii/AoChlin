import { View, Text, StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top_container: {
        margin: 15,
        marginTop: '5%'
    },
    top_text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    },
    text_loyal: {
        width: '80%',
        borderWidth: 2,
        height: 50,
        borderRadius: 50,
        padding: 12
    },
    listContainer: {
        flexDirection: 'row',
        // width: Dimensions.get('window').width / 2 - 20,
        backgroundColor: 'white',
        // margin: 5,
        // borderRadius: 20,
        // borderWidth: 2,
        height: 20,
        // borderBottomStartRadius: 10,
        borderBottomWidth: 0.25,
        height: 80,

    },

    nameText: {
        // justifyContent: "center",
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    disText: {
        color: 'black',
        // fontWeight: 'bold',
        marginLeft: 15,
    },
    priceText: {
        left: 100,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: '#000',
        fontWeight: 'bold',
        marginLeft: '50%',
        bottom: 30

    },










})