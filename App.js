import React from 'react'
import { Text, View } from 'react-native'
import Home from './TabbarScreen/Home/Index'
import { NavigationContainer } from '@react-navigation/native';
import Stacknav from './Navigation/Stacknav';
import Pickride from './Screen/Pickride/Index';
import Findingdriver from './Screen/Findingdriver/Index';
import FoundDriver from './Screen/FoundDriver/Index';
import Conversation from './Screen/Conversation/ChatScreen';
import MessageScreen from './Screen/Conversation/MessageScreen';
import PaymentMethod from './Screen/PaymentMethod/Index';
import Profile from './Screen/Profile/Index';
import Setting from './Screen/Setting/Index';
import History from './Screen/History/Index';
import Help from './Screen/Help&Faqs/Index';
import CourseDetails from './Screen/CourseDetails/index';

export default function App() {
  return (
    <NavigationContainer>
      <Stacknav />
     </NavigationContainer>
    // <Pickride />
    // <Findingdriver />
    // <FoundDriver />
    // <Conversation />
    // <MessageScreen />
    // <PaymentMethod />
    // <Setting />
    // <History />
    // <Help />
    // <CourseDetails />
  )
}
