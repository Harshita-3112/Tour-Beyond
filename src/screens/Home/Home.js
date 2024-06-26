import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import FilterButton from '../../components/FilterButton/FilterButton';
import {ImageBackground} from 'react-native';
import Poster from '../../components/Poster/Poster';
import SecondPoster from '../../components/SecondPoster/SecondPoster';

const Home = () => {
  const handleSeeAll = () => {
    navigation.navigate('Favourite');
  };

  const scrollSeeAll = () => {
    navigation.navigate('User');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 44,
          marginHorizontal: 20,
        }}>
        <Text style={styles.header}>Explore</Text>
        <View style={{flexDirection: 'row'}}>
          <Entypo name={'location-pin'} size={20} color={'#176FF2'} />
          <Text style={{color: '#606060'}}>Aspen, USA</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={20}
            color={'#176ff2'}
          />
        </View>
      </View>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Montserrat-Medium',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        Aspen
      </Text>
      <View style={styles.placeholder}>
        <AntDesign
          name="search1"
          size={22}
          style={{padding: 14, color: '#B8B8B8'}}
        />
        <TextInput placeholder="Find things to do" />
      </View>

      <View
        style={{
          height: 40,

          marginHorizontal: 20,
          marginTop: 24,
        }}>
        <ScrollView horizontal>
          <FilterButton title={'Location'} />
          <FilterButton title={'Hotel'} />
          <FilterButton title={'Food'} />
          <FilterButton title={'Adventure'} />
        </ScrollView>
      </View>

      <View
        style={{
          marginTop: 30,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#232323', fontWeight: 600, fontSize: 16}}>
          Popular
        </Text>
        <Text style={{color: '#176FF2', fontWeight: 500, marginTop: 5}}>
          See all
        </Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <ScrollView horizontal>
          <Poster
            title={'Alley Palace'}
            review={'4.1'}
            photo={require('../../assets/icons/place1.png')}
          />
          <Poster
            title={'Couerdus Alpes'}
            review={'4.5'}
            photo={require('../../assets/icons/place6.png')}
          />
          <Poster
            title={'Carrizo Plain'}
            review={'4.7'}
            photo={require('../../assets/icons/place2.png')}
          />
          <Poster
            title={'Devils Tower'}
            review={'4.3'}
            photo={require('../../assets/icons/place1.png')}
          />
        </ScrollView>
      </View>

      <Text
        style={{
          color: '#232323',
          fontSize: 16,
          fontWeight: '600',
          marginTop: 16,
          marginHorizontal: 20,
        }}>
        Recommended
      </Text>
      <ScrollView horizontal>
        <SecondPoster
          title={'Explore Aspen'}
          photo={require('../../assets/icons/place3.png')}
          text={'4N/5D'}
        />
        <SecondPoster
          title={'Luxurious Aspen'}
          photo={require('../../assets/icons/place4.png')}
          text={'3N/4D'}
        />
        <SecondPoster
          title={'Grottos Trail'}
          photo={require('../../assets/icons/place7.png')}
          text={'2N/3D'}
        />
        <SecondPoster
          title={'Aspen mountain'}
          photo={require('../../assets/icons/place8.png')}
          text={'4N/4D'}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    color: '#000',
  },

  placeholder: {
    height: 50,
    width: 'auto',
    backgroundColor: '#F3F8FE',
    marginHorizontal: 20,
    borderRadius: 25,
    marginTop: 24,
    flexDirection: 'row',
  },
});
