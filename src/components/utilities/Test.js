/** @format */
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";

export default function Test() {
  const [toastValue, setToastValue] = useState(["hello world"]);
  const [checkToast, setCheckToast] = useState(true);
  const toastRef = useRef(null);

  useEffect(() => {
    toastRef.current.show("hello world");
  }, [checkToast]);

  const handleSubmit = () => {
    console.log("hello toast");
    setCheckToast(!checkToast);
  };

  return (
    <View style={styles}>
      <Text>hello world</Text>

      <Button
        title="show toast"
        // onPress={() => toastRef.current.show(toastValue[0])}
        // onPress={toas}
        onPress={handleSubmit}
      />
      <Toast
        ref={toastRef}
        style={{ backgroundColor: "red" }}
        position="top"
        positionValue={10}
        fadeInDuration={750}
        fadeOutDuration={1000}
        // textStyle={{ color: "red" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    elevation: 999,
    alignItems: "center",
    zIndex: 10000
  },
  content: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10
  },
  text: {
    color: "white"
  }
});
