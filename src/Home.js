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
});

export default function Home({onRageModeButtonPress}) {
  return (
    <View style={styles.boardContainer}>
      <Button title="Rage mode" onPress={onRageModeButtonPress} />
    </View>
  );
}
Home.propTypes = {
  onRageModeButtonPress: PropTypes.func.isRequired,
};
