import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'

import { useState } from 'react'

export default function InputBox() {
  const [newmessage, setnewmessage] = useState()
  const Onsend = () => {
    console.warn('sending a message', newmessage)
    setnewmessage('');
  }
  return (
    <View style={styles.container}>
      <MCIcon name="camera-outline" size={22} color="#000" style={styles.icon} />
      <TextInput
        value={newmessage}
        onChangeText={setnewmessage}
        style={styles.input} placeholder='Message' />
      <FIcon onPress={Onsend} style={styles.send} name="send" size={24} color="#000" />
      {/* </TextInput> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#AF0909',
    borderWidth: 1,
    width: '92%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',

  },
  input: {
    // backgroundColor: '#fff',
    flex: 1,
    fontSize: 18,
    // padding: 5,
    paddingHorizontal: 5,

  },
  icon: {
    marginLeft: 5,
    marginRight: 10,
  },
  send: {
    padding: 7,
    borderRadius: 15,
    marginLeft: 5,
  },
});








