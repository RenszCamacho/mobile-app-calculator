import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {buttonTheme} from './buttonTheme';

interface Props {
  value: string;
  color?: string;
  isBig?: boolean;
  action?: (value: string) => void;
}

const Button = ({value, isBig, color = '#2D2D2D', action}: Props) => {
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
    <TouchableOpacity onPress={() => action && action(value)}>
      <View style={bgColor}>
        <Text style={textColor}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
