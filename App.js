/** @format */

import * as React from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";
import {
  colors,
  fontSize,
  padding,
  borderRadius,
  dimensions,
  btn
} from "./components/Style";

export default function App(props) {
  console.log(props, "hello");
  return (
    <View style={styles.container}>
      <View style={styles.boxWithShadow}>
        <Text>hhe</Text>
      </View>
      <Text style={styles.btn}>Click to show btn</Text>
      <Button
        title="Click"
        style={styles.btn}
        color="blue"
        accessibilityLabel="Learn more about this purple button"
        // disabled={true}
        onPress={() => Alert.alert("hello")}
      />
      <Text style={styles.text}>Find art mobiles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.redDark
    // backgroundColor: "red"
  },
  containerItems: {
    // flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: padding.small,
    borderRadius: borderRadius.large
    // backgroundColor: "yellow"
    // backgroundColor: "red"
  },
  text: {
    fontSize: fontSize.xlarge
    // fontSize: 40
  },
  btn: {
    // cursor: "pointer",
    // border: "none",
    // boxShadow: "0 4px hsla(0, 0%, 0.2)",
    borderRadius: 4,
    backgroundColor: "red",
    width: 200,
    // width: dimensions.fullWidth,
    // height: dimensions.fullHeight,
    textAlign: "center",
    color: "blue"
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "blue",
    padding: padding.small
  }
});
