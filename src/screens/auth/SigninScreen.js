/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../redux/actions/authAction';
import { Btn } from '../../components/utilities/CustomButton';
import AuthLayout from '../../components/auth/AuthLayout';
import { Toast } from '../../components/utilities/CustomToast';
import {
  TextInput,
  Input,
  StyleSheet,
  Text,
  View,
  Alert,
  Form,
  ActivityIndicator,
  TouchableHighlight
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
function Signin(props) {
  const toastRef = useRef(null);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [checkToast, setCheckToast] = useState(true);

  const [text, setText] = React.useState('');

  const onChangeText = (text) => setText(text);

  const handleSubmit = async () => {
    try {
      if (emailValue.length > 0 && passwordValue.length > 0) {
        const user = {
          email: emailValue,
          password: passwordValue
        };
        setCheckToast(true);
        setEmailValue('');
        setPasswordValue('');
        props.signinUser(user, props.navigation);
      } else {
        Alert.alert('all fields are required');
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  const emailError = () => {
    if (emailValue.length > 1 && !emailValue.includes('@')) {
      return (
        <View>
          <Text style={styles.invalidEmail}>Email must contain '@' !</Text>
        </View>
      );
    }
  };

  const { navigation } = props;
  console.log(checkToast, 'toast');
  let toastTrue = checkToast && props.loginToast;
  return (
    <AuthLayout
      title="Artwork market place"
      containerTitle="Login to your account">
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
      {emailError()}
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
          // backgroundStyle={styles.c}
          // textStyle={styles.c}
          isFetching={props.loginLoading}
          disabled={props.loginLoading}
          onPress={handleSubmit}
          title="LOGIN"
        />
      </View>
      <Text
        style={{ marginBottom: margin.xxsmall }}
        onPress={() => navigation.navigate('Create Account')}>
        don't have an account register now!
      </Text>
      <Text onPress={() => navigation.navigate('test')}>test componentff</Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  c: {
    color: '#323A43',
    backgroundColor: '#323A43'
  },
  invalidEmail: {
    color: 'red',
    fontSize: fontSize.xxsmall,
    marginTop: margin.xxxsmall
  },

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
const mapStateToProps = (state) => {
  return {
    loginLoading: state.ui.ui_loading_login,
    signinMessage: state.auth.loginMessage,
    loginToast: state.ui.authToast
  };
};
export default connect(mapStateToProps, { signinUser })(Signin);
