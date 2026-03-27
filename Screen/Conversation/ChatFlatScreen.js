import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Chats from '../assets/data/chats.json'
import ChatListItem from '../Components/ChatListItem'
export default function ChatFlatScreen() {
  return (

    <FlatList
      data={Chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}

    />
  )
}