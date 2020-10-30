import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import Search from "../../components/search/search";
import ListMovies from "../../components/containerMovieCard/ListMovies";
import { getMovies } from "../../services/movies";

export default function SearchMovie({ navigation }) {
  const [movies, setMovies] = useState([]);

  const search = (searchText) => {
    const movies = getMovies(searchText);
    movies.then((response) => {
      setMovies(response.data.Search);
    });
  };

  return (
    <View style={styles.container}>
      <Search placeholder="Enter a search from" onSearch={search} />
      <ListMovies navigation={navigation} movies={movies} />
    </View>
  );
}

const styles = (StyleSheet.Create = {
  container: {
    flex: 1,
  },
});
