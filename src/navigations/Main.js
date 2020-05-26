/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Artworks from "../components/artworks/Artworks";
function Main(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {props.isAuthenticated === false ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Signin} />
          <Stack.Screen name="Create Account" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="artworks" component={Artworks} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Main);
