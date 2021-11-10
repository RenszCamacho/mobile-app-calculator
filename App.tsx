import React from 'react';
import CalculatorScreen from './src/views/calculator/CalculatorScreen';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
