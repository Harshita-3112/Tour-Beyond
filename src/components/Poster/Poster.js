import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Poster = ({title, review, photo}) => {
  return (
    <ImageBackground source={photo} resizeMode="contain" style={styles.image}>
      <View style={styles.style1}>
        <Text style={styles.palace}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.design}>
          <Entypo
            name={'star'}
            size={12}
            color={'#D8D138'}
            style={{marginHorizontal: 4}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              marginRight: 5,
            }}>
            {review}
          </Text>
        </View>
        <View style={styles.decor}>
          <AntDesign
            name="heart"
            size={10}
            color={'#EC5655'}
            style={{alignSelf: 'center', marginTop: 4}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Poster;

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: 140,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  style1: {
    height: 25,
    width: 70,
    backgroundColor: '#4D5652',

    marginHorizontal: 8,
    borderRadius: 20,
  },
  palace: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 20,
  },
  design: {
    height: 16,
    width: 40,
    backgroundColor: '#4D5652',
    marginTop: 7,
    marginHorizontal: 10,
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 10,
  },
  decor: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#fff',
    marginRight: 100,
    marginTop: 3,
  },
});
