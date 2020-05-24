/** @format */

import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWight,
  borderRadius,
  boxWithShadow,
  dimensions
} from "../../Style";

function AuthLayout(props) {
  const { title, containerTitle, children } = props;
  return (
    <ScrollView style={styles.totalView}>
      <View>
        <Text style={styles.textHeader}>{title}</Text>
      </View>
      <View style={styles.inputTextContainer}>
        <Text style={styles.textTitle}>{containerTitle}</Text>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: colors.blueLight,
    fontSize: fontSize.medium,
    marginTop: margin.medium,
    marginLeft: margin.xxsmall,
    marginBottom: margin.xsmall
  },
  textTitle: {
    color: "black"
  },

  totalView: {
    height: dimensions.fullHeight,
    width: dimensions.fullWeight,
    backgroundColor: colors.blueSpecial
  },

  inputTextContainer: {
    // flex: 1,
    // height: 200,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.whiteLight,
    backgroundColor: colors.whiteLight,
    borderRadius: borderRadius.medium,
    margin: margin.xxsmall,
    padding: padding.xxsmall
  }
});

export default AuthLayout;
