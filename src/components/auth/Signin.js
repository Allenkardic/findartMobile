/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { signinUser } from "../../redux/actions/authAction";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLayout from "./AuthLayout";
import {
  TextInput,
  Input,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Form,
  ActivityIndicator
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
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleSubmit = () => {
    const user = {
      email: emailValue,
      password: passwordValue
    };

    console.log(props, "submited");
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
        <Button title="submit" onPress={handleSubmit} isloading={true}></Button>

        <ActivityIndicator animating={true} size="large" color="#0000ff" />
      </View>
      <Text
        style={{ marginBottom: margin.xxsmall }}
        onPress={() => navigation.navigate("Create Account")}>
        don't have an account register now!
      </Text>
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
    loginLoading: state.ui.ui_loading_login
  };
};
export default connect(mapStateToProps, { signinUser })(Signin);
