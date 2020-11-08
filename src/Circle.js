import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  circle: {
    width: 75,
    height: 75,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
  },
});

export default function Circle({color, onPress}) {
  const circleStyle = {
    ...styles.circle,
    ...(color ? {backgroundColor: color} : {}),
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={circleStyle} />
    </TouchableOpacity>
  );
}
Circle.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func,
};
Circle.defaultProps = {
  color: 'yellow',
  onPress: () => {},
};
