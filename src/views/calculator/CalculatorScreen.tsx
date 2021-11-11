import React from 'react';
import {View, Text} from 'react-native';

import Button from '../../components/button/Button';
import {calculatorTheme} from './calculatorTheme';
import useCalc from '../../hooks/useCalc';

const CalculatorScreen = () => {
  const {wrapperButtons, container, operand, currentOperand, previousOperand} =
    calculatorTheme;

  const {
    onPressButton,
    onPressPositiveNegative,
    onPressClear,
    onPressDelete,
    onPressAdd,
    onPressSubstract,
    onPressMultiply,
    onPressDivide,
    onPressEqual,
    prevNumber,
    currentNumber,
  } = useCalc();

  return (
    <View style={container}>
      {prevNumber !== '0' && (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[operand, previousOperand]}>
          {prevNumber}
        </Text>
      )}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[operand, currentOperand]}>
        {currentNumber}
      </Text>

      <View style={wrapperButtons}>
        <Button color="#9B9B9B" value="C" action={onPressClear} />
        <Button color="#9B9B9B" value="+/-" action={onPressPositiveNegative} />
        <Button color="#9B9B9B" value="del" action={onPressDelete} />
        <Button color="#FF9427" value="/" action={onPressDivide} />
      </View>

      <View style={wrapperButtons}>
        <Button value="7" action={onPressButton} />
        <Button value="8" action={onPressButton} />
        <Button value="9" action={onPressButton} />
        <Button color="#FF9427" value="x" action={onPressMultiply} />
      </View>

      <View style={wrapperButtons}>
        <Button value="4" action={onPressButton} />
        <Button value="5" action={onPressButton} />
        <Button value="6" action={onPressButton} />
        <Button color="#FF9427" value="-" action={onPressSubstract} />
      </View>

      <View style={wrapperButtons}>
        <Button value="1" action={onPressButton} />
        <Button value="2" action={onPressButton} />
        <Button value="3" action={onPressButton} />
        <Button color="#FF9427" value="+" action={onPressAdd} />
      </View>

      <View style={wrapperButtons}>
        <Button value="0" isBig action={onPressButton} />
        <Button value="." action={onPressButton} />
        <Button color="#FF9427" value="=" action={onPressEqual} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
