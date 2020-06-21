/** @format */

import React from 'react';

import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWeight,
  borderRadius,
  boxWithShadow,
  dimensions
} from '../../Style';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ArtworkCard({
  pageTitle,
  artworkName,
  artworkDescription,
  imgStyle,
  imgSource
}) {
  const myTheme = useTheme();
  console.log('theme', myTheme);
  return (
    <ScrollView>
      {/* <FontAwesomeIcon icon={["fab", "apple"]} size={30} color="red" /> */}
      {/* <FontAwesomeIcon icon="check-square" /> */}

      <Icon name="rocket" size={30} color="#900" />

      <Text style={styles.pageTitleText}>{pageTitle}</Text>
      <View
        style={[
          { backgroundColor: myTheme.colors.greyBackground },
          styles.artworkContainer
        ]}>
        <Image
          style={styles.imgStyle}
          //   style={{ width: 200, height: 200 }}
          source={imgSource}
        />
        <Text style={[{ color: colors.blueDark }, styles.nameText]}>
          {artworkName}
        </Text>
        <Text style={[{ color: colors.blueLight }, styles.desText]}>
          {artworkDescription}
        </Text>
        <Text>hjl</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageTitleText: {
    // color: colors.blueLight,
    marginTop: margin.small,
    marginBottom: margin.xsmall,
    marginLeft: margin.xxsmall,
    fontSize: fontSize.medium
  },

  artworkContainer: {
    height: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
    paddingTop: padding.xsmall,
    paddingBottom: padding.xxsmall,
    paddingLeft: padding.xxsmall,
    paddingRight: padding.xxsmall,
    // backgroundColor: myTheme.colors.blueLight,
    borderRadius: borderRadius.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },

  imgStyle: {
    width: '100%',
    height: 250,
    borderRadius: borderRadius.small
  },

  nameText: {
    // color: colors.blueSpecial,
    marginTop: margin.small,
    marginBottom: margin.xxsmall,
    fontSize: fontSize.medium
  },

  desText: {
    // color: colors.blueLight,
    fontSize: fontSize.xxsmall
  }
});
