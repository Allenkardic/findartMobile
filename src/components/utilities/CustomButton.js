/** @format */

import React from 'react';

import { colors } from '../../Style';
import { Button } from 'react-native-paper';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export function Btn(props) {
  const {
    icon,
    onPress,
    disabled,
    uppercase,
    theme,
    textStyle,
    backgroundStyle,
    testId,
    darkMode,
    isFetching,
    title
  } = props;
  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      loading={isFetching}
      disabled={disabled}
      uppercase={uppercase}
      theme={theme}
      labelStyle={textStyle}
      style={backgroundStyle}
      testId={testId}
      dark={darkMode}>
      {title}
    </Button>
  );
}

export function CustomButton({
  buttonStyle,
  onPress,
  size,
  color,
  animating,
  title,
  isFetching
}) {
  return (
    <View>
      <TouchableOpacity
        style={isFetching === true ? styles.buttonPress : styles.button}
        onPress={onPress}>
        <ActivityIndicator
          style={isFetching === false && { display: 'none' }}
          size={size}
          color={color}
          animating={isFetching}
        />
        <Text style={colors.blueSpecial}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPress: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueLight,
    height: 40,
    opacity: 0.1
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueLight,
    height: 40
  }
});
