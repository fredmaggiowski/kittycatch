import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BackHandler} from 'react-native';

export const withBackButtonHandler = (WrappedComponent) => ({
  onBackPress,
  ...props
}) => {
  useEffect(() => {
    const onBack = () => {
      onBackPress();
      return true;
    };

    const handler = BackHandler.addEventListener('hardwareBackPress', onBack);
    return () => handler.remove();
  }, [onBackPress]);

  return <WrappedComponent {...props} />;
};
withBackButtonHandler.propTypes = {
  onBackPress: PropTypes.func.isRequired,
};
