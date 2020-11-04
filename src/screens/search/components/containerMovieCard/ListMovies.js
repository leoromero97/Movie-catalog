import React from "react";
import MovieCard from "../../../../components/movieCard/movieCard";
import { SafeAreaView, StyleSheet } from "react-native";
import Error from "../../../error/error";

export default function ListMovies({ movies, navigation }) {
  return (
    <SafeAreaView style={styles.containerSroll}>
        {!movies ? (
          <Error textError="No movies or series found" />
        ) : (
          movies.map(({ imdbID, Poster, Title, Year, Type }) => {
            return (
              <MovieCard
                key={imdbID}
                poster={{ uri: Poster }}
                title={Title}
                year={Year}
                type={Type}
                navigation={navigation}
                id={imdbID}
              />
            );
          })
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSroll: {
    flex: 1,
    backgroundColor: "#9e9e9e",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
