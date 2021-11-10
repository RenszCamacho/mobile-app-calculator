import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Button from '../../components/share/button/Button';
import {calculatorTheme} from './calculatorTheme';

const CalculatorScreen = () => {
  const {wrapperButtons, container, operand, currentOperand, previousOperand} =
    calculatorTheme;

  const [digitNumber, setDigitNumber] = useState('0');

  // const onPressButton = (value: string) => {
  //   setDigitNumber(digitNumber + value);
  // };

  const onPressClear = () => {
    setDigitNumber('0');
  };

  return (
    <View style={container}>
      <Text style={[operand, previousOperand]}>{digitNumber}</Text>
      <Text style={[operand, currentOperand]}>{digitNumber}</Text>

      <View style={wrapperButtons}>
        <Button color="#9B9B9B" value="C" action={onPressClear} />
        <Button color="#9B9B9B" value="+/-" />
        <Button color="#9B9B9B" value="del" />
        <Button color="#FF9427" value="/" />
      </View>

      <View style={wrapperButtons}>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button color="#FF9427" value="x" />
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
        <Button value="0" isBig />
        <Button value="." />
        <Button color="#FF9427" value="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
