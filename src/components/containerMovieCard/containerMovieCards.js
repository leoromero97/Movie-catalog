import React, { useState } from "react";
import MovieCard from "../movieCard/movieCard";
import { ScrollView, StyleSheet } from "react-native";

export default function ListMovies({ movies }) {
  return (
    <ScrollView style={styles.containerSroll}>
      {movies.map(({ imdbID, poster, title, year, type }) => {
        return (
          <MovieCard
            key={imdbID}
            poster={{ uri: poster }}
            title={title}
            year={year}
            type={type}
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
