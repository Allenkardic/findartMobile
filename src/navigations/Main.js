/** @format */

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme as navigatorDefaultTheme,
  DarkTheme as navigatorDarkTheme,
  useTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import {
  DefaultTheme as paperDefaultTheme,
  DarkTheme as paperDarkTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import Check from '../components/utilities/Check';
import Icon from 'react-native-vector-icons/FontAwesome';
import SigninScreen from '../screens/auth/SigninScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import Test from '../components/utilities/Test';
import ArtworksScreen from '../screens/artworks/ArtworksScreen';
import ArtworkDetailScreen from '../screens/artworks/ArtworkDetailScreen';
import UserprofileScreen from '../screens/profile/UserprofileScreen';
import UpdateprofileScreen from '../screens/profile/UpdateprofileScreen';
import MyartworksScreen from '../screens/artworks/MyartworksScreen';
import AddmyartworkScreen from '../screens/artworks/AddmyartworkScreen';
function Main(props) {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const artworkHeader = () => (
    <Stack.Navigator>
      <Stack.Screen name="artworks" component={ArtworksScreens} />
      <Stack.Screen name="artworkDetails" component={ArtworkDetails} />
    </Stack.Navigator>
  );

  const userProfileHeader = () => (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={UserprofileScreen} />
      <Stack.Screen name="update profile" component={UpdateprofileScreen} />
    </Stack.Navigator>
  );

  const myArtworkHeader = () => (
    <Stack.Navigator>
      <Stack.Screen name="myartworks" component={MyartworksScreen} />
      <Stack.Screen name="addmyartwork" component={AddmyartworkScreen} />
    </Stack.Navigator>
  );

  // const MyDrawer = () => (
  //   <Drawer.Navigator
  //     drawerContent={(props) => {
  //       return <CustomDrawerContent {...props} />;
  //     }}>
  //     <Drawer.Screen
  //       name="artworks"
  //       children={artworkHeader}
  //       options={{
  //         drawerIcon: () => <Icon name="rocket" size={20} color="#900" />
  //       }}
  //     />
  //     <Drawer.Screen name="User profiles" children={userProfileHeader} />
  //     <Drawer.Screen name="My artworks" children={myArtworkHeader} />
  //   </Drawer.Navigator>
  // );

  const DarkTheme = {
    ...navigatorDarkTheme,
    ...paperDarkTheme,

    colors: {
      ...navigatorDarkTheme.colors,
      ...paperDarkTheme.colors,
      greyDark: '#323A43',
      greyNormal: '#7A8691',
      greySpecial: '#2F4F4F',
      greyLight: 'rgb(193, 196, 206)',
      greyBackground: 'rgb(232, 233, 238)',
      blueDark: '#141e79f5',
      blueBackground: '#91a5e5f5',
      blueXspecial: '#48535ef5',
      blueSpecial: '#020c13f5',
      blueLight: 'rgb(171, 171, 204)',
      blueLite: 'rgb(188, 188, 228)',
      whiteLight: 'rgb(255, 255, 255)',
      whiteDark: 'rgb(245, 245, 245)'
    }
  };

  const MyTheme = {
    ...navigatorDefaultTheme,
    ...paperDefaultTheme,
    colors: {
      ...navigatorDefaultTheme.colors,
      ...paperDefaultTheme.colors,
      // background: "rgb(193, 196, 206)",
      greyDark: '#323A43',
      greyNormal: '#7A8691',
      greySpecial: '#2F4F4F',
      greyLight: 'rgb(193, 196, 206)',
      greyBackground: 'rgb(232, 233, 238)',
      blueDark: '#141e79f5',
      blueBackground: '#91a5e5f5',
      blueXspecial: '#48535ef5',
      blueSpecial: '#020c13f5',
      blueLight: 'rgb(171, 171, 204)',
      blueLite: 'rgb(188, 188, 228)',
      whiteLight: 'rgb(255, 255, 255)',
      whiteDark: 'rgb(245, 245, 245)'
    }
  };

  return (
    <PaperProvider theme={MyTheme}>
      <NavigationContainer theme={MyTheme}>
        {props.isAuthenticated === false ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={SigninScreen} />
            <Stack.Screen name="Create Account" component={SignupScreen} />
            <Stack.Screen name="test" component={Test} />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator>
            <Drawer.Screen
              name="artworks"
              children={artworkHeader}
              options={{
                drawerIcon: () => <Icon name="rocket" size={20} color="#900" />
              }}
            />
            <Drawer.Screen name="User profiles" children={userProfileHeader} />
            <Drawer.Screen name="My artworks" children={myArtworkHeader} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Main);
