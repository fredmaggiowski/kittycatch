import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/Home';
import GameBoard from './src/GameBoard';
import SettingsPage from './src/Settings/SettingsPage';

export default function App() {
  const [page, setPage] = useState(null);

  const selectPage = () => {
    switch (page) {
      case null:
        return (
          <Home
            onArcadeModeButtonPress={() => setPage('arcade')}
            onRageModeButtonPress={() => setPage('rage')}
            onSettingsButtonPress={() => setPage('settings')}
          />
        );
      case 'rage':
      case 'arcade':
        return <GameBoard onBackPress={() => setPage(null)} gameMode={page} />;
      case 'settings':
        return <SettingsPage onBackPress={() => setPage(null)} />;
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>{selectPage()}</SafeAreaView>
    </>
  );
}
