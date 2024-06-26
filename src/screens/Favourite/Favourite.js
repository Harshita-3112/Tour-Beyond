import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const HEIGHT = Dimensions.get('screen').height;
const Favourite = () => {
  return (
    <View style={{marginTop: 20, marginHorizontal: 20}}>
      <ImageBackground
        source={require('../../assets/icons/place2.png')}
        resizeMode="cover"
        style={{
          height: 280,
          width: 'auto',
          borderRadius: 16,
          // justifyContent: 'flex-end',
          // alignItems: 'flex-end',
        }}>
        <View
          style={{
            height: 34,
            width: 34,
            backgroundColor: '#F3F8FE',
            marginHorizontal: 12,
            marginTop: 12,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={16}
            color={'#B8B8B8'}
          />
        </View>

        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -20,
            right: 3,
          }}>
          <AntDesign name="heart" size={20} color={'#EC5655'} style={{}} />
        </View>
      </ImageBackground>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 24,
        }}>
        <Text style={{color: '#232323', fontWeight: 600, fontSize: 20}}>
          Coeurdes Alpes
        </Text>
        <Text
          style={{
            color: '#176FF2',
            fontWeight: 700,
            marginTop: 7,
            fontSize: 12,
          }}>
          Show map
        </Text>
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
