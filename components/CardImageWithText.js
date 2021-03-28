import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardImageWithText = props => {
  const {image, title, description} = props;
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 150,
        marginTop: 24,
        borderRadius: 8,
        overflow: 'hidden',
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        <Image source={image} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={{flex: 2, paddingLeft: 16}}>
        <Text bold>{title}</Text>
        <Text color="#777" marginTop={16}>
          {description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 24,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={18} color="orange" />
            <Icon name="star" size={18} color="orange" />
            <Icon name="star" size={18} color="orange" />
            <Icon name="star" size={18} color="#d3d3d3" />
            <Icon name="star" size={18} color="#d3d3d3" />
          </View>
          <Text style={{fontSize: 12, color: '#777'}}>400+ pesanan</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardImageWithText;
