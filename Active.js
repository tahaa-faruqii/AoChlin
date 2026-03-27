import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Dash from 'react-native-dash';
import React from 'react';
const data = [
  {
    Name: 'Kashif',
    Taxi: 'AoChlin Taxi',
    CouponCode: 763259,
    price: 5000,
    fristPrise: 6000,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Atif',
    Taxi: 'AoChlin Taxi',
    CouponCode: 263259,
    price: 4900,
    fristPrise: 5400,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Asad',
    Taxi: 'AoChlin Taxi',
    CouponCode: 463659,
    price: 6000,
    fristPrise: 6000,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Ali',
    Taxi: 'AoChlin Taxi',
    CouponCode: 663359,
    price: 47000,
    fristPrise: 57000,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Umar',
    Taxi: 'AoChlin Taxi',
    CouponCode: 163159,
    price: 7000,
    fristPrise: 8000,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Taha',
    Taxi: 'AoChlin Taxi',
    CouponCode: 563859,
    price: 3000,
    fristPrise: 4000,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Adnan',
    Taxi: 'AoChlin Taxi',
    CouponCode: 763059,
    price: 2000,
    fristPrise: 2500,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Saqib',
    Taxi: 'AoChlin Taxi',
    CouponCode: 363259,
    price: 1000,
    fristPrise: 1200,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Manan',
    Taxi: 'AoChlin Taxi',
    CouponCode: 563259,
    price: 8000,
    fristPrise: 9000,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
  {
    Name: 'Shahabaz',
    Taxi: 'AoChlin Taxi',
    CouponCode: 963259,
    price: 1000,
    fristPrise: 500,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLPc0Wy0_66AXSo7cwsa5VZEDWYFmXWqi-Q&usqp=CAU',
    },
  },
];

const Item = ({name, taxiName, price, couponCode, image, fristPrise}) => (
  <View
    style={{
      flex: 1,
      borderColor: '#CECCC7',
      borderWidth: 2,
      marginVertical: 10,
      width: '72%',
      height: '50%',
      borderRadius: 10,
    }}>
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: '#CECCC7',
        borderRadius: 10,
        borderLeftWidth: 0.8,
        borderRightWidth: 0.8,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={image}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginHorizontal: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={{marginTop: 10, fontWeight: 'bold', color: 'black'}}>
            {taxiName}
          </Text>
          <Text style={{marginBottom: 10, fontWeight: 'bold', color: 'black'}}>
            {name}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{fontWeight: 'bold', fontSize: 8, marginRight: 15}}>
          Coupon Code
        </Text>
        <Text style={{fontWeight: 'bold', color: 'black', marginRight: 15}}>
          {couponCode}
        </Text>

        <Dash style={{alignSelf: 'center', width: '90%', height: 2}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 5,
        }}>

        <View style={{flexDirection:"row"}}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
            marginLeft:25,

          }}>
          {fristPrise}
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold',marginHorizontal:8}}>{price}</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 60,
            height: 20,
            alignItems: 'center',
            justifyContent:"space-evenly",
            borderRadius: 10,
            borderColor: '#9D1C36',
            borderWidth: 2,
            

          }}>
          <Text style={{fontWeight: 'bold', fontSize: 10}}>Use Code</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={{fontWeight: 'bold', marginHorizontal: 15, fontSize: 12}}>
      Coupon Code
    </Text>
    <View
      style={{
        width: '90%',
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#CECCC7',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: 'black',
          marginHorizontal: 15,
          marginVertical: 5,
        }}>
        {couponCode}
      </Text>
    </View>

    <TouchableOpacity
      style={{
        width: 70,
        height: 30,
        backgroundColor: '#9D1C36',
        marginVertical: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 12, color: '#fff'}}>
        Use Code
      </Text>
    </TouchableOpacity>
  </View>
);

export default function Active() {
  return (
    <View>
      <View style={styles.ToDoView}>
        <Text style={styles.ToDo}>Active Task</Text>
      </View>
      <View style={{left: 10}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item
              name={item.Name}
              price={item.price}
              couponCode={item.CouponCode}
              taxiName={item.Taxi}
              image={item.image}
              fristPrise={item.fristPrise}
            />
          )}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 10,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ToDoView: {backgroundColor: '#0e4375', height: 60},
  ToDo: {
    flex: 1,
    alignSelf: 'center',
    top: 16,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f5c851',
  },
  AddButton: {
    position: 'absolute',
    bottom: 90,
    right: 30,
    height: 60,
    width: 60,
    backgroundColor: '#2FAAEC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
