/** @format */

import React from "react";
import { colors } from "../../Style";
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function CustomButton({
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
          style={isFetching === false && { display: "none" }}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blueLight,
    height: 40,
    opacity: 0.1
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blueLight,
    height: 40
  }
});
