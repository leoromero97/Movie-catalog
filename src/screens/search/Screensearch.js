import React from "react";

import { View, StyleSheet } from "react-native";
import Search from "../../components/search/search";
import ListMovies from "../../components/containerMovieCard/ListMovies";
import ARRAYMOVIES from "../../services/arrayMovie";

export default function SearchMovie({ navigation }) {
  return (
    <View style={styles.container}>
      <Search placeholder="Enter a search from" />
      <ListMovies movies={ARRAYMOVIES} navigation={navigation} />
    </View>
  );
}

const styles = (StyleSheet.Create = {
  container: {
    flex: 1,
  },
});
