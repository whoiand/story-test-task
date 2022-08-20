import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Story} from './src/screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <Story />
    </SafeAreaProvider>
  );
};

export default App;
