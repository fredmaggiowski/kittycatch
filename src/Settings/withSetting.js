import React, {useCallback, useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const SOUND_DISABLED = 'SOUND_DISABLED';

export const withSetting = (desiredSetting, WrappedComponent) => (props) => {
  const [setting, setSetting] = useState(null);
  const {getItem, setItem} = useAsyncStorage(desiredSetting);

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem();
    setSetting(item === 'true');
  }, [getItem]);

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setSetting(JSON.stringify(newValue));
  };

  useEffect(() => {
    readItemFromStorage();
  }, [readItemFromStorage]);

  if (setting !== null) {
    return (
      <WrappedComponent
        {...props}
        settings={{
          ...(props.settings ? props.settings : {}),
          [desiredSetting]: {
            value: setting,
            set: writeItemToStorage,
          },
        }}
      />
    );
  }
  return null;
};
