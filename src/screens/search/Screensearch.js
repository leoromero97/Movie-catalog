import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import Search from "./components/search/search";
import ListMovies from "./components/containerMovieCard/ListMovies";
import { getMovies } from "../../services/movies";

export default function SearchMovie({ navigation }) {
  const [movies, setMovies] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const [text, setText] = useState();

  const search = () => {
    setPageNumber(1);
    const moviesPromise = getMovies(text, 1);
    moviesPromise.then((response) => {
      setMovies(response.data.Search);
    });
  };

  const setPage = () => {
    const newPageNumber = pageNumber + 1
    setPageNumber(newPageNumber);
    const newMoviesPromise = getMovies(text, newPageNumber);
    newMoviesPromise.then((res) => {
      setMovies(movies.concat(res.data.Search));
    });
  };

  return (
    <View style={styles.container}>
      <Search
        placeholder="Enter a search from"
        onSearch={search}
        onTextNew={setText}
      />
      <ListMovies
        navigation={navigation}
        movies={movies}
        onNextPage={setPage}
      />
    </View>
  );
}

const styles = (StyleSheet.Create = {
  container: {
    flex: 1,
  },
});
