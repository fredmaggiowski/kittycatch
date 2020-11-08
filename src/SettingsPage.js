import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {withBackButtonHandler} from './withBackButtonHandler';

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
    fontSize: 25,
  },
});

const SOUND_ENABLED = 'SOUND_ENABLED';

function SettingsPage() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const {getItem, setItem} = useAsyncStorage(SOUND_ENABLED);

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem();
    setSoundEnabled(item === 'true');
  }, [getItem]);

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setSoundEnabled(newValue.toString());
  };

  useEffect(() => {
    readItemFromStorage();
  }, [readItemFromStorage]);

  return (
    <View style={styles.boardContainer}>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsTitle}>Sound enabled</Text>
        <Switch
          onValueChange={() => {
            writeItemToStorage(`${!soundEnabled}`);
          }}
          value={soundEnabled}
        />
      </View>
    </View>
  );
}
export default withBackButtonHandler(SettingsPage);
