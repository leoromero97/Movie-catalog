import * as React from "react";

import { View, StyleSheet, Button } from "react-native";
import Search from "../components/search/search";
import ListMovies from "../components/containerMovieCard/containerMovieCards";
import ARRAYMOVIES from "../services/arrayMovie";

export default function SearchMovie({ navigation }) {
  return (
    <View style={styles.container}>
      <Search placeholder="Enter a search from" />
      <Button
        title="View Movie"
        onPress={() => navigation.navigate("Movie")}
      />
      <ListMovies movies={ARRAYMOVIES} />
    </View>
  );
}

const styles = (StyleSheet.Create = {
  container: {
    flex: 1,
  },
});
