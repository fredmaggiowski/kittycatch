import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: Colors.white,
  },
  homeRow: {
    padding: 16,
  },
});

export default function Home({
  onArcadeModeButtonPress,
  onRageModeButtonPress,
  onSettingsButtonPress,
}) {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.homeRow}>
        <Button title="Arcade mode" onPress={onArcadeModeButtonPress} />
      </View>

      <View style={styles.homeRow}>
        <Button title="Rage mode" onPress={onRageModeButtonPress} />
      </View>

      <View style={styles.homeRow}>
        <Button title="Settings" onPress={onSettingsButtonPress} />
      </View>
    </View>
  );
}
Home.propTypes = {
  onArcadeModeButtonPress: PropTypes.func.isRequired,
  onRageModeButtonPress: PropTypes.func.isRequired,
  onSettingsButtonPress: PropTypes.func.isRequired,
};
