import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';

import Button from '../../components/share/button/Button';
import {calculatorTheme} from './calculatorTheme';

const CalculatorScreen = () => {
  const {wrapperButtons, container, operand, currentOperand, previousOperand} =
    calculatorTheme;

  const [digitNumber, setDigitNumber] = useState('0');

  const onPressButton = (value: string) => {
    if (digitNumber.length === 15) {
      Alert.alert('Max numbers allowed');
      return;
    }

    if (value === '.' && digitNumber.includes('.')) {
      return;
    }

    if (value === '.' && digitNumber === '0') {
      setDigitNumber(digitNumber + value);
      return;
    }

    setDigitNumber(digitNumber === '0' ? value : digitNumber + value);
  };

  const onPressClear = () => {
    setDigitNumber('0');
  };

  const onPressDelete = () => {
    if (digitNumber.length === 2 && digitNumber.startsWith('-')) {
      setDigitNumber('0');
      return;
    }

    if (digitNumber.length === 1) {
      setDigitNumber('0');
      return;
    }

    setDigitNumber(digitNumber.slice(0, -1));
  };

  const onPressPositiveNegative = () => {
    if (digitNumber === '0') {
      return;
    }
    if (digitNumber.startsWith('-')) {
      setDigitNumber(digitNumber.slice(1));
    } else {
      setDigitNumber('-' + digitNumber);
    }
  };

  // const onPressOperator = (value: string) => {
  //   let result;
  //   switch (value) {
  //     case '+':
  //       result = setPrevNumber(digitNumber);
  //       break;

  //     default:
  //       break;
  //   }
  //   return result;
  // };

  return (
    <View style={container}>
      {digitNumber !== '0' && (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[operand, previousOperand]}>
          {digitNumber}
        </Text>
      )}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[operand, currentOperand]}>
        {digitNumber}
      </Text>

      <View style={wrapperButtons}>
        <Button color="#9B9B9B" value="C" action={onPressClear} />
        <Button color="#9B9B9B" value="+/-" action={onPressPositiveNegative} />
        <Button color="#9B9B9B" value="del" action={onPressDelete} />
        <Button color="#FF9427" value="/" />
      </View>

      <View style={wrapperButtons}>
        <Button value="7" action={onPressButton} />
        <Button value="8" action={onPressButton} />
        <Button value="9" action={onPressButton} />
        <Button color="#FF9427" value="x" />
      </View>

      <View style={wrapperButtons}>
        <Button value="4" action={onPressButton} />
        <Button value="5" action={onPressButton} />
        <Button value="6" action={onPressButton} />
        <Button color="#FF9427" value="-" />
      </View>

      <View style={wrapperButtons}>
        <Button value="1" action={onPressButton} />
        <Button value="2" action={onPressButton} />
        <Button value="3" action={onPressButton} />
        <Button color="#FF9427" value="+" />
      </View>

      <View style={wrapperButtons}>
        <Button value="0" isBig action={onPressButton} />
        <Button value="." action={onPressButton} />
        <Button color="#FF9427" value="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
