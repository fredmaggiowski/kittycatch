import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import Sound from 'react-native-sound';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Circle from './Circle';
import RandomPathAnimator from './Animators/RandomPathAnimator';
import RandomAppearAnimator from './Animators/RandomAppearAnimator';
import {withBackButtonHandler} from './withBackButtonHandler';
import {withSetting, SOUND_DISABLED} from './Settings/withSetting';

const styles = StyleSheet.create({
  boardContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  scoreContainer: {
    height: 50,
    fontWeight: '800',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  scoreText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

function GameBoard({gameMode, settings}) {
  const {
    SOUND_DISABLED: {value: soundDisabled},
  } = settings;

  const [arcadeCount, setArcadeCount] = useState(0);

  const sound = new Sound('feedback_ok.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const playSoundFeedback = () => {
    if (soundDisabled) {
      return;
    }
    sound.stop();
    sound.play();
  };

  const onPress = () => {
    playSoundFeedback();
  };

  const selectGameMode = () => {
    switch (gameMode) {
      case 'rage':
        return (
          <>
            <RandomPathAnimator>
              <Circle color={'blue'} onPress={onPress} />
            </RandomPathAnimator>
            <RandomPathAnimator>
              <Circle color={'red'} onPress={onPress} />
            </RandomPathAnimator>
            <RandomPathAnimator>
              <Circle color={'yellow'} onPress={onPress} />
            </RandomPathAnimator>
          </>
        );
      case 'arcade':
        return (
          <>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>Score: {arcadeCount}</Text>
            </View>
            <RandomAppearAnimator key={`arcade-animator-${arcadeCount}`}>
              <Circle
                color={'yellow'}
                onPress={() => {
                  setArcadeCount(arcadeCount + 1);
                  onPress();
                }}
              />
            </RandomAppearAnimator>
          </>
        );
    }
  };

  return <View style={styles.boardContainer}>{selectGameMode()}</View>;
}
GameBoard.propTypes = {
  gameMode: PropTypes.oneOf(['arcade', 'rage']).isRequired,
};

export default withBackButtonHandler(withSetting(SOUND_DISABLED, GameBoard));
