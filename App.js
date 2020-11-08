import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import GameBoard from './src/GameBoard';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <GameBoard />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
