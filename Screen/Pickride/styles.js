import { View, Text, StyleSheet, Dimensions } from 'react-native'


export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top_container: {

        margin: 15,
        marginTop: '-30%'
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
        backgroundColor: 'white',
        height: 80,

    },
    item_image: {
        padding: 10,
        margin: 10,
        top: '4%'
        // flexDirection: 'row'
    },
    list_view: {
        position: 'absolute',
        alignItems: 'flex-start',
        top: 20,
        marginLeft: '10%',
        position: 'absolute'
    },

    nameText: {
        // justifyContent: "center",
        color: 'black',
        fontWeight: 'bold',
        marginLeft: '10%',
        fontSize: 16

    },
    disText: {
        // color: 'black',
        // fontWeight: 'bold',
        marginLeft: 15,
        fontSize: 12
    },
    priceText: {
        // left: '60%',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: '#000',
        fontWeight: 'bold',
        marginLeft: '70%',
        bottom: 30

    },
    text_off: {

    },
    text_drag: {
        flexDirection: 'row',
        paddingRight: 10,
        fontSize: 16,
        color: '#3098F8',
        fontWeight: 'bold'
    },
    button_change: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginLeft: '40%'
    },
    button_view: {
        marginTop: '20%',
        paddingVertical: 20,
        width: '80%',
        alignSelf: 'center',
        // position: 'absolute',
        bottom: '5%'
    },










})