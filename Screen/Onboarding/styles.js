import { View, Text, s, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 10,


    },
    title: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        alignItems: 'flex-start',
        right: '15%'

    },
    subtitleContainer: {
        marginBottom: 20,
        marginLeft: 20,
        textAlign: 'left'

    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        // textAlign: 'center',
        textAlign: 'left'

    },
});

export default styles;




