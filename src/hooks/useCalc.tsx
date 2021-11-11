import {useState, useRef} from 'react';
import {Alert} from 'react-native';
import {Operators} from '../types';

const useCalc = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperatorRef = useRef<Operators>();

  const onPressButton = (value: string) => {
    if (currentNumber.length === 15) {
      Alert.alert('Max numbers allowed');
      return;
    }

    if (currentNumber === 'Error' || currentNumber === 'NaN') {
      setCurrentNumber('0');
      setPrevNumber('0');
      lastOperatorRef.current = undefined;
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
    onPressSwapNumber();
    if (currentNumber === 'Error') {
      return;
    }

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
        currentNumber === '0'
          ? setCurrentNumber('Error')
          : setCurrentNumber(
              (parseFloat(prevNumber) / parseFloat(currentNumber)).toString(),
            );
        break;

      default:
        setCurrentNumber('0');
        break;
    }

    setPrevNumber('0');
  };

  return {
    onPressButton,
    onPressPositiveNegative,
    onPressClear,
    onPressDelete,
    onPressAdd,
    onPressSubstract,
    onPressMultiply,
    onPressDivide,
    onPressEqual,
    currentNumber,
    prevNumber,
  };
};

export default useCalc;
