/** @format */

import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function CustomDrawer(props) {
  return (
    <View>
      <DrawerContentScrollView>
        <View>
          <DrawerItem name="hfnn" label="khn">
            <Text> custom drawer</Text>
          </DrawerItem>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;
