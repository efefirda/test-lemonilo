import React, {Children} from 'react';

import {TouchableOpacity, Image} from 'react-native';

const CardImage = props => {
  const {image} = props;
  return (
    <TouchableOpacity
      style={{
        width: 300,
        height: 150,
        marginLeft: 24,
        borderRadius: 8,
        overflow: 'hidden',
      }}>
      <Image style={{width: '100%', height: '100%'}} source={image} />
    </TouchableOpacity>
  );
};

export default CardImage;
