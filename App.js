import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import GameBoard from './src/GameBoard';
import Home from './src/Home';

export default function App() {
  const [page, setPage] = useState(null);

  const onRageModeButtonPress = () => {
    console.log('onRageModeButtonPress');
    setPage('rage');
  };

  const selectPage = () => {
    switch (page) {
      case null:
        return <Home onRageModeButtonPress={onRageModeButtonPress} />;
      case 'rage':
        return <GameBoard onBackPress={() => setPage(null)} gameMode={page} />;
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>{selectPage()}</SafeAreaView>
    </>
  );
}
