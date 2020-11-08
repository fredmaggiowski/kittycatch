import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {withBackButtonHandler} from '../withBackButtonHandler';
import {withSetting, SOUND_DISABLED} from './withSetting';

const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: Colors.white,
  },
  settingsRow: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsTitle: {
    fontSize: 24,
  },
});

function SettingsPage({settings}) {
  const {value: soundEnabled, set: setSoundEnabled} = settings[SOUND_DISABLED];

  return (
    <View style={styles.boardContainer}>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsTitle}>Sound disabled</Text>
        <Switch
          onValueChange={() => setSoundEnabled(`${!soundEnabled}`)}
          value={soundEnabled}
        />
      </View>
    </View>
  );
}
export default withBackButtonHandler(withSetting(SOUND_DISABLED, SettingsPage));
