import React from 'react';
import {StyleSheet, View} from 'react-native';
import Sound from 'react-native-sound';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Circle from './Circle';
import AnimatedCircle from './RandomPathAnimator';
import {withBackButtonHandler} from './withBackButtonHandler';
import {withSetting, SOUND_ENABLED} from './Settings/withSetting';

const styles = StyleSheet.create({
  boardContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
});

function GameBoard({settings}) {
  const {
    SOUND_ENABLED: {value: soundEnabled},
  } = settings;

  const sound = new Sound('feedback_ok.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const onPress = () => {
    if (!soundEnabled) {
      return;
    }
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
GameBoard.propTypes = {};

export default withBackButtonHandler(withSetting(SOUND_ENABLED, GameBoard));
