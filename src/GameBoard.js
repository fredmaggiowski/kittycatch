import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Circle from './Circle';
import AnimatedCircle from './RandomPathAnimator';

const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: Colors.white,
  },
});

export default function GameBoard({size, color}) {
  const onPress = () => {
    console.log('PRESS');
  };
  return (
    <View style={styles.boardContainer}>
      <AnimatedCircle>
        <Circle color={'blue'} onPress={onPress} />
      </AnimatedCircle>
      <AnimatedCircle>
        <Circle color={'red'} onPress={onPress} />
      </AnimatedCircle>
    </View>
  );
}
