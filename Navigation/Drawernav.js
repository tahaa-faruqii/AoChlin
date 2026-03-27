import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../TabbarScreen/Home/Index';
import Menu from '../DrawerScreen/Menu/Index';
import Option from '../DrawerScreen/Option/Index';


const Drawer = createDrawerNavigator();
export default function Drawernav() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="Option" component={Option} />
        </Drawer.Navigator>
    )
}