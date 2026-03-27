import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function MessageScreen({ message }) {
  // const data = [
  //   {
  //     "id": "m1",
  //     "text": "How are you, Lukas!",
  //     "createdAt": "2022-10-10T12:48:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   },
  //   {
  //     "id": "m2",
  //     "text": "I am good, good",
  //     "createdAt": "2022-10-03T14:49:00.000Z",
  //     "user": {
  //       "id": "u2",
  //       "name": "Lukas"
  //     }
  //   },
  //   {
  //     "id": "m3",
  //     "text": "What about you?",
  //     "createdAt": "2022-10-03T14:49:40.000Z",
  //     "user": {
  //       "id": "u2",
  //       "name": "Lukas"
  //     }
  //   },
  //   {
  //     "id": "m4",
  //     "text": "Good as well, preparing for the stream now.",
  //     "createdAt": "2022-10-03T14:50:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   },
  //   {
  //     "id": "m5",
  //     "text": "How is your uni going?",
  //     "createdAt": "2022-10-03T14:51:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   },
  //   {
  //     "id": "m6",
  //     "text": "It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?",
  //     "createdAt": "2022-10-03T14:49:00.000Z",
  //     "user": {
  //       "id": "u2",
  //       "name": "Lukas"
  //     }
  //   },
  //   {
  //     "id": "m7",
  //     "text": "Big Data is really interesting. Cannot wait to go through all the material.",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   },
  //   {
  //     "id": "m8",
  //     "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   },
  //   {
  //     "id": "m9",
  //     "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u2",
  //       "name": "Lukas"
  //     }
  //   },
  //   {
  //     "id": "m10",
  //     "text": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u2",
  //       "name": "Lukas"
  //     }
  //   },
  //   {
  //     "id": "m11",
  //     "text": "Ok.",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u2",
  //       "name": "Lukas"
  //     }
  //   },
  //   {
  //     "id": "m12",
  //     "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   },
  //   {
  //     "id": "m13",
  //     "text": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
  //     "createdAt": "2022-10-03T14:53:00.000Z",
  //     "user": {
  //       "id": "u1",
  //       "name": "Vadim"
  //     }
  //   }
  // ]
  const IsMyMessage = () => {
    return message.user.id === 'u1';
    // console.log(message)
  };
  return (
    <View style={[styles.container,
    {
      backgroundColor: IsMyMessage() ? 'white' : '#000',
      alignSelf: IsMyMessage() ? 'flex-end' : 'flex-start',
    }
    ]}>
      <Text style={{ color: IsMyMessage() ? '#000' : '#fff', }}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    margin: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.20,

    elevation: 3,

  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  }




})