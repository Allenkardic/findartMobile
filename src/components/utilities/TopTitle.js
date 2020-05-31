/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { dimensions, colors, padding } from "../../Style";

export default function TopTitle({ headerTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{headerTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth,
    backgroundColor: colors.blueSpecial,
    paddingTop: padding.small,
    paddingLeft: padding.xxsmall,
    zIndex: -1
  },
  containerText: {
    color: colors.blueLite
  }
});
