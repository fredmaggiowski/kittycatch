import React from 'react';
import {StyleSheet, View} from 'react-native';
import Sound from 'react-native-sound';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Circle from './Circle';
import RandomPathAnimator from './RandomPathAnimator';
import {withBackButtonHandler} from './withBackButtonHandler';
import {withSetting, SOUND_DISABLED} from './Settings/withSetting';

const styles = StyleSheet.create({
  boardContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
});

function GameBoard({settings}) {
  const {
    SOUND_DISABLED: {value: soundDisabled},
  } = settings;

  const sound = new Sound('feedback_ok.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const onPress = () => {
    if (soundDisabled) {
      return;
    }
    sound.stop();
    sound.play();
  };

  return (
    <View style={styles.boardContainer}>
      <RandomPathAnimator>
        <Circle color={'blue'} onPress={onPress} />
      </RandomPathAnimator>
      <RandomPathAnimator>
        <Circle color={'red'} onPress={onPress} />
      </RandomPathAnimator>
      <RandomPathAnimator>
        <Circle color={'yellow'} onPress={onPress} />
      </RandomPathAnimator>
    </View>
  );
}
GameBoard.propTypes = {};

export default withBackButtonHandler(withSetting(SOUND_DISABLED, GameBoard));
