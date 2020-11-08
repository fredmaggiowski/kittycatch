import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

export default function RandomAppearAnimator({children}) {
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const fadeAnimation = useRef(new Animated.Value(0));

  const destination = {
    x: windowWidth * Math.random(),
    y: windowHeight * Math.random(),
  };

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnimation.current, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    fadeIn();
  }, [fadeIn]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnimation.current,
        left: destination.x,
        top: destination.y,
      }}>
      {children}
    </Animated.View>
  );
}
