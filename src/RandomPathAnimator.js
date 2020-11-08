import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Animated, Dimensions} from 'react-native';

export default function AnimatedCircle({children}) {
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const positionAnim = useRef(new Animated.ValueXY());

  const loopAnimation = useCallback(() => {
    const destination = {
      x: windowWidth * Math.random() - 100,
      y: windowHeight * Math.random() - 100,
    };

    Animated.timing(positionAnim.current, {
      toValue: destination,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      loopAnimation();
    });
  }, [positionAnim, windowHeight, windowWidth]);

  useEffect(() => {
    loopAnimation();
  }, [loopAnimation]);

  return (
    <Animated.View
      style={{
        transform: [
          {translateX: positionAnim.current.x},
          {translateY: positionAnim.current.y},
        ],
      }}>
      {children}
    </Animated.View>
  );
}
AnimatedCircle.propTypes = {
  onPress: PropTypes.func,
};
