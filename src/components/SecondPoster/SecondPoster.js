import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const SecondPoster = ({title, photo, text}) => {
  return (
    <View>
      <ImageBackground
        source={photo}
        style={{
          height: 90,
          width: 150,
          marginHorizontal: 20,
          marginTop: 10,

          borderRadius: 12,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            height: 14,
            width: 40,
            backgroundColor: '#4D5652',
            borderRadius: 12,
          }}>
          <Text style={{color: '#fff', fontSize: 10, alignSelf: 'center'}}>
            {text}
          </Text>
        </View>
      </ImageBackground>
      <Text
        style={{
          color: '#232323',
          fontWeight: '500',
          fontSize: 12,
          marginHorizontal: 20,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default SecondPoster;

const styles = StyleSheet.create({});
