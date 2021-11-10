import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {calculatorTheme} from './calculatorTheme';

const CalculatorScreen = () => {
  const {background, text} = calculatorTheme;

  return (
    <SafeAreaView style={background}>
      <View>
        <Text style={text}>Calculator</Text>
      </View>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
