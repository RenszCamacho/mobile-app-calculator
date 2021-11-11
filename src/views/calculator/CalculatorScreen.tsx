import React, {useState, useRef} from 'react';
import {View, Text, Alert} from 'react-native';

import Button from '../../components/share/button/Button';
import {calculatorTheme} from './calculatorTheme';

enum Operators {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  EQUAL = '=',
}

const CalculatorScreen = () => {
  const {wrapperButtons, container, operand, currentOperand, previousOperand} =
    calculatorTheme;

  const [currentNumber, setCurrentNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperatorRef = useRef<Operators>();

  const onPressButton = (value: string) => {
    if (currentNumber.length === 15) {
      Alert.alert('Max numbers allowed');
      return;
    }

    if (value === '.' && currentNumber.includes('.')) {
      return;
    }

    if (value === '.' && currentNumber === '0') {
      setCurrentNumber(currentNumber + value);
      return;
    }

    setCurrentNumber(currentNumber === '0' ? value : currentNumber + value);
  };

  const onPressClear = () => {
    setCurrentNumber('0');
    setPrevNumber('0');
  };

  const onPressDelete = () => {
    if (currentNumber.length === 2 && currentNumber.startsWith('-')) {
      setCurrentNumber('0');
      return;
    }

    if (currentNumber.length === 1) {
      setCurrentNumber('0');
      return;
    }

    setCurrentNumber(currentNumber.slice(0, -1));
  };

  const onPressPositiveNegative = () => {
    if (currentNumber === '0') {
      return;
    }
    if (currentNumber.startsWith('-')) {
      setCurrentNumber(currentNumber.slice(1));
    } else {
      setCurrentNumber('-' + currentNumber);
    }
  };

  const onPressSwapNumber = () => {
    if (currentNumber.endsWith('.')) {
      setPrevNumber(currentNumber.slice(0, -1));
    } else {
      setPrevNumber(currentNumber);
    }
    setCurrentNumber('0');
  };

  const onPressAdd = () => {
    onPressSwapNumber();
    lastOperatorRef.current = Operators.ADD;
  };

  const onPressSubstract = () => {
    onPressSwapNumber();
    lastOperatorRef.current = Operators.SUBTRACT;
  };

  const onPressMultiply = () => {
    onPressSwapNumber();
    lastOperatorRef.current = Operators.MULTIPLY;
  };

  const onPressDivide = () => {
    onPressSwapNumber();
    lastOperatorRef.current = Operators.DIVIDE;
  };

  const onPressEqual = () => {
    // if (lastOperatorRef.current === Operators.ADD) {
    //   setCurrentNumber(
    //     (parseFloat(prevNumber) + parseFloat(currentNumber)).toString(),
    //   );
    // } else if (lastOperatorRef.current === Operators.SUBTRACT) {
    //   setCurrentNumber(
    //     (parseFloat(prevNumber) - parseFloat(currentNumber)).toString(),
    //   );
    // } else if (lastOperatorRef.current === Operators.MULTIPLY) {
    //   setCurrentNumber(
    //     (parseFloat(prevNumber) * parseFloat(currentNumber)).toString(),
    //   );
    // } else if (lastOperatorRef.current === Operators.DIVIDE) {
    //   setCurrentNumber(
    //     (parseFloat(prevNumber) / parseFloat(currentNumber)).toString(),
    //   );
    // }
    // setPrevNumber('0');
    switch (lastOperatorRef.current) {
      case Operators.ADD:
        setCurrentNumber(
          (parseFloat(prevNumber) + parseFloat(currentNumber)).toString(),
        );
        break;

      case Operators.SUBTRACT:
        setCurrentNumber(
          (parseFloat(prevNumber) - parseFloat(currentNumber)).toString(),
        );
        break;

      case Operators.MULTIPLY:
        setCurrentNumber(
          (parseFloat(prevNumber) * parseFloat(currentNumber)).toString(),
        );
        break;

      case Operators.DIVIDE:
        setCurrentNumber(
          (parseFloat(prevNumber) / parseFloat(currentNumber)).toString(),
        );
        break;

      default:
        break;
    }
    setPrevNumber('0');
  };

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
