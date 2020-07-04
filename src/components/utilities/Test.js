/** @format */
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Button, Snackbar } from 'react-native-paper';

export default function Test() {
  const [toastValue, setToastValue] = useState(['hello world']);
  const [checkToast, setCheckToast] = useState(true);
  const toastRef = useRef(null);

  useEffect(() => {
    toastRef.current.show('hello world');
  }, [checkToast]);

  const handleSubmit = () => {
    console.log('hello toast');
    setCheckToast(!checkToast);
  };

  const [visible, setVisible] = useState(true);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles}>
      <View style={styles.container1}>
        {/* <View style={{ backgroundColor: 'red' }}> */}
        <Text>jka;dn</Text>
        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            }
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
      <Text>hello world mnbh</Text>

      {/* <Button
        title="show toast"
        onPress={handleSubmit}
      /> */}
      <Toast
        ref={toastRef}
        style={{ backgroundColor: 'red' }}
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
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 999,
    alignItems: 'center',
    zIndex: 10000
  },
  content: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10
  },
  text: {
    color: 'white'
  },

  container1: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: 'yellow'
  }
});
