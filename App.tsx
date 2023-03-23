import {SafeAreaView} from 'react-native';
import React from 'react';
import {FlatListPicker} from './src/components/FlatListPicker/FlatListPicker';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatListPicker />
    </SafeAreaView>
  );
};

export default App;
