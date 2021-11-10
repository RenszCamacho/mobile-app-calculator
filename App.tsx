import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const {container, text} = styles;

  return (
    <View style={container}>
      <Text style={text}>Calculator</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});
