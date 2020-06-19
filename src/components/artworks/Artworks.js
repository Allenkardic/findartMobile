/** @format */
import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { getArtworks } from "../../redux/actions/artworkAction";
import ArtworkCard from "../utilities/ArtworkCard";
import {
  TextInput,
  Input,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Form,
  ScrollView
} from "react-native";
import TopTitle from "../utilities/TopTitle";
// import IMG from "../../images/img1.png";

function Artworks(props) {
  useEffect(() => {
    // console.log("here is artprops", props.getArtworks());
    props.getArtworks();
  }, []);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
    console.log("storage");
  };

  console.log(props.artworks, "here it is");
  return (
    <ScrollView>
      <Text>khsbdh</Text>
      {props.artworks.map((artwork, i) => (
        <ArtworkCard
          key={i}
          pageTitle="pageTitle"
          artworkName={artwork.name}
          artworkDescription={artwork.description}
          imgSource={{ uri: artwork.imageUrl }}
        />
      ))}
      <Button title="clear storage" onPress={clearAsyncStorage} />
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  artworks: state.artwork.artworks,
  isFetching: state.ui.isFetching_artworks
});
export default connect(mapStateToProps, { getArtworks })(Artworks);
