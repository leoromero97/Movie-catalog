import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import Search from "./components/search/search";
import ListMovies from "./components/containerMovieCard/ListMovies";
import { getMovies } from "../../services/movies";

export default function SearchMovie({ navigation }) {
  const [movies, setMovies] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const [text, setText] = useState();

  const changeText = (textMov) => {
    setText(textMov);
  };

  const search = () => {
    const moviesPromise = getMovies(text, pageNumber);
    moviesPromise.then((response) => {
      setMovies(response.data.Search);
    });
  };

  const setPage = () => {
    setPageNumber(pageNumber + 1);
    /*set page number no se ejecuta rapido, es asincronica. ver FUNCIONES ASINCRONICO, USESTATE*/
    alert(pageNumber);
    const newMoviesPromise = getMovies(text, pageNumber);
    newMoviesPromise.then((res) => {
      setMovies(movies.concat(res.data.Search));
    });
  };

  return (
    <View style={styles.container}>
      <Search
        placeholder="Enter a search from"
        onSearch={search}
        onTextNew={changeText}
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
