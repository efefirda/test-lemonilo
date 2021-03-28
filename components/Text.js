import React from 'react';
import {Text as TextComp} from 'react-native';

const Text = props => {
  const {children, color, size, bold, marginRight, marginTop} = props;
  return (
    <TextComp
      style={{
        color: color ?? '#252525',
        fontSize: size ?? 14,
        fontWeight: bold ? 'bold' : 'normal',
        marginRight: marginRight ?? 0,
        marginTop: marginTop ?? 0,
      }}>
      {children}
    </TextComp>
  );
};

export default Text;
