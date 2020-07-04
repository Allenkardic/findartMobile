/** @format */

import React from 'react';
import { View, Text } from 'react-native';
import { Snackbar } from 'react-native-paper';

export function Toast({
  visible,
  theme,
  duration,
  backgroundStyle,
  onDismiss,
  toastText,
  textStyle,
  toastRef
}) {
  // console.log(Snackbar.DURATION_MEDIUM, 'snack');
  return (
    <View>
      <Snackbar
        visible={visible}
        theme={theme}
        duration={duration}
        onDismiss={onDismiss}
        ref={toastRef}
        style={backgroundStyle}>
        <Text style={textStyle}>{toastText}</Text>
      </Snackbar>
    </View>
  );
}
