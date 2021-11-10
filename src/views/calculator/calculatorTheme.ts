import {StyleSheet} from 'react-native';

export const calculatorTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  operand: {
    fontSize: 60,
    color: '#fff',
    alignSelf: 'flex-end',
  },
  currentOperand: {
    fontSize: 60,
  },
  previousOperand: {
    fontSize: 30,
    opacity: 0.7,
  },
  wrapperButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
