import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Menu = () => {
  return (
    <View
      style={{
        paddingTop: 40,
        paddingHorizontal: 24,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Icon name="food" size={32} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="car" size={32} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="motorbike" size={32} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ferris-wheel" size={32} color="#777" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 24,
        }}>
        <TouchableOpacity>
          <Icon name="airballoon" size={32} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="beach" size={32} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ticket" size={32} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="book-outline" size={32} color="#777" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
