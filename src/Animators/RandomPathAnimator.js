import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

export default function RandomPathAnimator({children}) {
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const positionAnim = useRef(new Animated.ValueXY());

  const loopAnimation = useCallback(() => {
    const destination = {
      x: (windowWidth - 150) * Math.random(),
      y: (windowHeight - 150) * Math.random(),
    };

    Animated.timing(positionAnim.current, {
      toValue: destination,
      duration: 1500,
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
