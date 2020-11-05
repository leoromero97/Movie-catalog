import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import Search from "./components/search/search";
import ListMovies from "./components/containerMovieCard/ListMovies";
import { getMovies } from "../../services/movies";

export default function SearchMovie({ navigation }) {
  const [movies, setMovies] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const search = (textMovie) => {
    const movies = getMovies(textMovie, pageNumber);
    movies.then((response) => {
      setMovies(response.data.Search);
    });
  };

  const setPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <View style={styles.container}>
      <Search placeholder="Enter a search from" onSearch={search} />
      <ListMovies navigation={navigation} movies={movies} onNextPage={setPage} />
    </View>
  );
}

const styles = (StyleSheet.Create = {
  container: {
    flex: 1,
  },
});
