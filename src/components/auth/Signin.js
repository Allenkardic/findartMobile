/** @format */

import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { signinUser } from "../../redux/actions/authAction";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomButton from "../utilities/CustomButton";
import AuthLayout from "./AuthLayout";
import Toast, { DURATION } from "react-native-easy-toast";
import {
  TextInput,
  Input,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Form,
  ActivityIndicator,
  TouchableHighlight
} from "react-native";
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
function Signin(props) {
  const toastRef = useRef(null);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkToast, setCheckToast] = useState(true);

  useEffect(() => {
    let message = props.signinMessage;
    toastRef.current.show(message, 2000);
  }, [checkToast]);

  const handleSubmit = () => {
    const user = {
      email: emailValue,
      password: passwordValue
    };
    setCheckToast(!checkToast);
    props.signinUser(user, props.navigation);
  };
  const { navigation } = props;
  return (
    <AuthLayout
      title="Artwork market place"
      containerTitle="Login to your account">
      <Text style={styles.inputBox}>E-mail</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setEmailValue(text)}
        value={emailValue}
        placeholder="Enter E-mail"
      />
      <Text style={styles.inputBox}>Password</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setPasswordValue(text)}
        value={passwordValue}
        placeholder="Enter Password"
        secureTextEntry={true}
        password={true}
      />
      <View style={styles.btn}>
        <CustomButton
          isFetching={props.loginLoading}
          title={"LOGIN"}
          onPress={handleSubmit}
        />
      </View>
      <Text
        style={{ marginBottom: margin.xxsmall }}
        onPress={() => navigation.navigate("Create Account")}>
        don't have an account register now!
      </Text>
      <Text onPress={() => navigation.navigate("test")}>test component</Text>
      <Toast
        ref={toastRef}
        style={{ backgroundColor: "red" }}
        position="top"
        positionValue={10}
        fadeInDuration={750}
        fadeOutDuration={1000}
        // textStyle={{ color: "red" }}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: margin.small,
    marginBottom: margin.xxxsmall
  },

  inputText: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.greyLight,
    borderRadius: borderRadius.small,
    backgroundColor: colors.whiteDark,
    height: 40
  },

  btn: {
    marginTop: margin.small,
    marginBottom: margin.small
  }
});
const mapStateToProps = (state) => {
  return {
    loginLoading: state.ui.ui_loading_login,
    signinMessage: state.auth.loginMessage
  };
};
export default connect(mapStateToProps, { signinUser })(Signin);
