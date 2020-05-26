/** @format */

import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";
import {
  colors,
  fontSize,
  padding,
  borderRadius,
  dimensions,
  btn
} from "./src/Style";
import Main from "./src/navigations/Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueXspecial
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
