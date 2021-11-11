import {useState, useRef} from 'react';

enum Operators {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  EQUAL = '=',
}

const useCalc = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperatorRef = useRef<Operators>();

  return {
    currentNumber,
    setCurrentNumber,
    prevNumber,
    setPrevNumber,
    lastOperatorRef,
  };
};

export default useCalc;
