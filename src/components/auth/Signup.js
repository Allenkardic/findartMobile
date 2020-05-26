/** @format */

import React, { useState } from "react";
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
  Form
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
function Signup(props) {
  const [emailValue, setEmailValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = () => {
    const user = {
      email: emailValue,
      password: passwordValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      phone: phoneValue,
      country: countryValue,
      password: passwordValue
    };

    console.log(user, "submited");
  };
  const { navigation } = props;
  return (
    <AuthLayout title="Artwork market place" containerTitle="Register">
      <Text style={styles.inputBox}>E-mail</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setEmailValue(text)}
        value={emailValue}
        placeholder="Enter E-mail"
      />
      <Text style={styles.inputBox}>First name</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setFirstNameValue(text)}
        value={firstNameValue}
        placeholder="First name"
      />
      <Text style={styles.inputBox}>Last name</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setLastNameValue(text)}
        value={lastNameValue}
        placeholder="Last name"
      />
      <Text style={styles.inputBox}>Phone number</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setPhoneValue(text)}
        value={phoneValue}
        placeholder="Phone number"
      />
      <Text style={styles.inputBox}>Country</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setCountryValue(text)}
        value={countryValue}
        placeholder="Country"
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
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <Text
        style={{ marginBottom: margin.xxsmall }}
        onPress={() => navigation.navigate("Login")}>
        have an account login!
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

export default Signup;
