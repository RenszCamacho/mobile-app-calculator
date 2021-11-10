import React from 'react';
import {View, Text} from 'react-native';
import {buttonTheme} from './buttonTheme';

interface Props {
  value: number | string;
  color?: string;
  isBig?: boolean;
}

const Button = ({value, isBig, color = '#2D2D2D'}: Props) => {
  const {button, buttonText} = buttonTheme;
  const bgColor = {
    ...button,
    backgroundColor: color,
    width: isBig ? 180 : 80,
  };

  const textColor = {
    ...buttonText,
    color: color === '#9B9B9B' ? '#000' : '#fff',
  };

  return (
    <View style={bgColor}>
      <Text style={textColor}>{value}</Text>
    </View>
  );
};

export default Button;
