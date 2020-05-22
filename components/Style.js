/** @format */

// app/styles/base.js

import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colors = {
  greyDark: "#323A43",
  greyNormal: "#7A8691",
  greySpecial: "#2F4F4F",
  greyLight: "rgb(193, 196, 206)",
  greyBackground: "rgb(232, 233, 238)",
  blueDark: "#141e79f5",
  blueBackground: "#91a5e5f5",
  blueXspecial: "#48535ef5",
  blueSpecial: "#020c13f5",
  blueLight: "rgb(171, 171, 204)",
  blueLite: "rgb(188, 188, 228)",
  whiteLight: "rgb(255, 255, 255)",
  whiteDark: "rgb(245, 245, 245)",
  redDark: "rgb(49, 6, 6)"
};

export const padding = {
  xxsmall: 12,
  xsmall: 24,
  small: 32,
  medium: 48,
  large: 64,
  xlarge: 96,
  xxlarge: 128
};

export const margin = {
  xxsmall: 12,
  xsmall: 24,
  small: 32,
  medium: 48,
  large: 64,
  xlarge: 96,
  xxlarge: 128
};

export const fontSize = {
  xxsmall: 14,
  xsmall: 16,
  small: 18,
  medium: 20,
  large: 30,
  xlarge: 36,
  xxlarge: 48,
  title: 60
};

export const fontWeight = {
  bold: 700,
  medium: 600,
  regular: 400,
  light: 300
};

export const borderRadius = {
  small: 5,
  medium: 10,
  large: 15,
  round: 50
};

export const lineHeight = {
  small: 1,
  medium: 1.5,
  large: 2
};

export const btn = {
  cursor: "pointer",
  border: "none",
  boxShadow: "0 4px hsla(0, 0%, 0.2)",
  borderRadius: 4,
  backgroundColor: "red"
};

export const boxWithShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5
};
