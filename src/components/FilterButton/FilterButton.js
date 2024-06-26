import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FilterButton = ({title}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 30,
          width: 80,
          backgroundColor: '#F3F8FE',

          marginHorizontal: 6,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
