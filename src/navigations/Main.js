/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Test from "../components/utilities/Test";
import Artworks from "../components/artworks/Artworks";
import ArtworkDetails from "../components/artworks/ArtworkDetails";
import Userprofile from "../components/profile/Userprofile";
function Main(props) {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const artworkHeader = () => (
    <Stack.Navigator>
      <Stack.Screen name="artworks" component={Artworks} />
      <Stack.Screen name="artworkDetails" component={ArtworkDetails} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {props.isAuthenticated === false ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Signin} />
          <Stack.Screen name="Create Account" component={Signup} />
          <Stack.Screen name="test" component={Test} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="artworks" children={artworkHeader} />
          <Drawer.Screen name="profiles" component={Userprofile} />
        </Drawer.Navigator>
        // <Stack.Navigator>
        //   <Stack.Screen name="artworks" component={Artworks} />

        //   <Stack.Screen name="profile" component={Userprofile} />
        // </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Main);
