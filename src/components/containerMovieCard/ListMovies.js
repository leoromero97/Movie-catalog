import React from "react";
import MovieCard from "../movieCard/movieCard";
import { ScrollView, StyleSheet } from "react-native";

export default function ListMovies({ movies, navigation }) {
  return (
    <ScrollView style={styles.containerSroll}>
      {movies.map(({ imdbID, Poster, Title, Year, Type }) => {
        return (
          <MovieCard
            key={imdbID}
            poster={{ uri: Poster }}
            title={Title}
            year={Year}
            type={Type}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerSroll: {
    backgroundColor: "#9e9e9e",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
