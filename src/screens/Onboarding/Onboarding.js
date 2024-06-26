import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const handleExplore = () => {
    navigation.navigate('BottomTabNavigator');
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/icons/onboarding.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <Text
          style={{
            fontFamily: 'Hiatus',
            color: '#fff',
            fontSize: 116,
            alignSelf: 'center',
            marginTop: 75,
          }}>
          Aspen
        </Text>
        <View style={{marginTop: 250}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 18,
              color: '#fff',
              left: 32,
              fontWeight: '400',
              fontStyle: 'normal',
            }}>
            plan your
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 30,
              color: '#fff',
              fontWeight: '500',
              left: 32,
            }}>
            Luxurious
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 30,
              color: '#fff',
              fontWeight: '500',
              left: 32,
            }}>
            Vacation
          </Text>
        </View>

        <TouchableOpacity onPress={handleExplore}>
          <LinearGradient
            colors={['#176FF2', '#196EEE']}
            style={{
              height: 40,
              width: 'auto',
              marginHorizontal: 32,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 24,
            }}>
            {/* <TextInput placeholder="Explore" placeholderTextColor={'#fff'} /> */}
            <Text style={{color: '#fff'}}>Explore</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
