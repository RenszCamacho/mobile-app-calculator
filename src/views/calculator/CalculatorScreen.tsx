import React from 'react';
import {View, Text} from 'react-native';
import {calculatorTheme} from './calculatorTheme';

const CalculatorScreen = () => {
  const {container, text} = calculatorTheme;

  return (
    <View style={container}>
      <Text style={text}>Calculator</Text>
    </View>
  );
};

export default CalculatorScreen;
