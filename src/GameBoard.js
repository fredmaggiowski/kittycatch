import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BackHandler, StyleSheet, View} from 'react-native';
import Sound from 'react-native-sound';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Circle from './Circle';
import AnimatedCircle from './RandomPathAnimator';

const styles = StyleSheet.create({
  boardContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
});

export default function GameBoard({onBackPress}) {
  useEffect(() => {
    const onBack = () => {
      onBackPress();
      return true;
    };

    const handler = BackHandler.addEventListener('hardwareBackPress', onBack);
    return () => handler.remove();
  }, [onBackPress]);

  const sound = new Sound('feedback_ok.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const onPress = () => {
    sound.stop();
    sound.play();
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
GameBoard.propTypes = {
  onBackPress: PropTypes.func.isRequired,
};
