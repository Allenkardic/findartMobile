/** @format */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/authAction';
import AuthLayout from '../../components/auth/AuthLayout';
import { Btn } from '../../components/utilities/CustomButton';
import { Toast } from '../../components/utilities/CustomToast';

import {
  TextInput,
  Input,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Form
} from 'react-native';
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWight,
  borderRadius,
  boxWithShadow,
  dimensions
} from '../../Style';
function SignupScreen(props) {
  const [emailValue, setEmailValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [checkToast, setCheckToast] = useState(true);

  const handleSubmit = async () => {
    try {
      if (
        emailValue.length > 0 &&
        passwordValue.length > 0 &&
        firstNameValue.length > 0 &&
        lastNameValue.length > 0 &&
        phoneValue.length > 0 &&
        countryValue.length > 0
      ) {
        const newUser = {
          email: emailValue,
          password: passwordValue,
          firstName: firstNameValue,
          lastName: lastNameValue,
          phone: phoneValue,
          country: countryValue
        };
        props.signinUser(newUser);
        setCheckToast(true);

        console.log(user, 'submited');
      } else {
        Alert.alert('all fields are required');
      }
    } catch (error) {
      Alert.alert(error);
    }
  };
  const { navigation } = props;
  let toastTrue = checkToast && props.loginToast;
  return (
    <AuthLayout title="Artwork market place" containerTitle="Register">
      <Toast
        backgroundStyle={{ backgroundColor: 'red', top: 0 }}
        visible={toastTrue}
        onDismiss={() => setCheckToast(false)}
        textStyle={{ color: 'yellow' }}
        toastText={props.signinMessage}
        duration={7000}
      />
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
        <Btn
          isFetching={props.registerLoading}
          disabled={props.registerLoading}
          onPress={handleSubmit}
          title="REGISTER"
        />
      </View>
      <Text
        style={{ marginBottom: margin.xxsmall }}
        onPress={() => navigation.navigate('Login')}>
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
    borderStyle: 'solid',
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

const mapStateToProps = (state) => ({
  registerLoading: state.ui.ui_loading_signup,
  registerMessage: state.auth.signupMessage,
  registerToast: state.ui.authToast
});

export default connect(mapStateToProps, { signupUser })(SignupScreen);
