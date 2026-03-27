import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../TabbarScreen/Home/Index'
import Login from '../Screen/Login/index'
import Onboarding from '../Screen/Onboarding/Index'

import Drawernav from './Drawernav';
import Tabnav from './Tabnav';
import Verification from '../Screen/Verification/Index';
import Register from '../Screen/Register/Index';
import Findplaces from '../Screen/Findplaces/Index';
export default function Stacknav() {
    const Stack = createNativeStackNavigator();
    return (

        <Stack.Navigator initialRouteName='onboarding' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Findplaces" component={Findplaces} />


            <Stack.Screen name="Home" component={Tabnav} />
            {/* <Stack.Screen name="chat" component={Drawernav} /> */}

        </Stack.Navigator>

    )
}