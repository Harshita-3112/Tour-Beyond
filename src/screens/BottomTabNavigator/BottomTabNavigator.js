import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Favourite from '../Favourite/Favourite';
import Home from '../Home/Home';
import User from '../User/User';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name={'home'}
              size={22}
              color={focused ? '#176FF2' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
