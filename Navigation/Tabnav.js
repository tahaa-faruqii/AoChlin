import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../TabbarScreen/Chat/Index';
import Drawernav from './Drawernav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Home from '../TabbarScreen/Home/Index';
import Setting from '../Screen/Setting/Index';

const Tab = createBottomTabNavigator();

export default function Tabnav() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="chat" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={Setting}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <AIcon name="setting" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
