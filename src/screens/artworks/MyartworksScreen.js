/** @format */

import React from 'react';
import { View, Text, Button } from 'react-native';
export default function Myartworks(props) {
  console.log(props, 'move');
  return (
    <View>
      <Button
        title="move"
        onPress={() => props.navigation.navigate('addmyartwork')}
      />
      <Text>here is my artwork</Text>
    </View>
  );
}
