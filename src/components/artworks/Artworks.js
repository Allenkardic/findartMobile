/** @format */
import React from "react";
import ArtworkCard from "../utilities/ArtworkCard";
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
import TopTitle from "../utilities/TopTitle";
import IMG from "../../images/img1.png";

export default function Artworks() {
  return (
    <View>
      <ArtworkCard
        pageTitle="pageTitle"
        artworkName="ArtworkName"
        artworkDescription="ArtworkDescription"
        imgSource={{ uri: "https://i.imgur.com/TkIrScD.png" }}
      />
    </View>
  );
}
