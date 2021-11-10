import React from 'react';
import {View, Text} from 'react-native';

import Button from '../../components/share/button/Button';
import {calculatorTheme} from './calculatorTheme';

const CalculatorScreen = () => {
  const {wrapperButtons, container, operand, currentOperand, previousOperand} =
    calculatorTheme;

  return (
    <View style={container}>
      <Text style={[operand, previousOperand]}>1,500.00</Text>
      <Text style={[operand, currentOperand]}>1,500.00</Text>

      <View style={wrapperButtons}>
        <Button color="#9B9B9B" value="C" />
        <Button color="#9B9B9B" value="+/-" />
        <Button color="#9B9B9B" value="del" />
        <Button color="#FF9427" value="/" />
      </View>

      <View style={wrapperButtons}>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button color="#FF9427" value="X" />
      </View>

      <View style={wrapperButtons}>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button color="#FF9427" value="-" />
      </View>

      <View style={wrapperButtons}>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button color="#FF9427" value="+" />
      </View>

      <View style={wrapperButtons}>
        <Button value="0" isBig hasAlignLeft />
        <Button value="." />
        <Button color="#FF9427" value="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
