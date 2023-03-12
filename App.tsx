import {SafeAreaView} from 'react-native';
import React from 'react';
import {Slider} from './src/components/Slider';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Slider />
    </SafeAreaView>
  );
};

export default App;
