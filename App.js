/** @format */

import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";
import {
  colors,
  fontSize,
  padding,
  borderRadius,
  dimensions,
  btn
} from "./src/Style";
import Signin from "./src/components/auth/Signin";
import Signup from "./src/components/auth/Signup";

export default function App(props) {
  const Stack = createStackNavigator();
  const [x, setX] = useState(false);
  return (
    <NavigationContainer>
      {x === !!false ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Signin} />
          <Stack.Screen name="Create Account" component={Signup} />
        </Stack.Navigator>
      ) : (
        <View>
          <Text>hello</Text>
        </View>
      )}
    </NavigationContainer>
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
