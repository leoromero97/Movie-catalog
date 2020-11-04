import React, { useState } from "react";
import MovieCard from "../../../../components/movieCard/movieCard";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Error from "../../../error/error";

export default function ListMovies({ movies, navigation, onNextPage }) {
  const renderItem = (arrayItem) => {
    return (
      <MovieCard
        poster={{ uri: arrayItem.item.Poster }}
        title={arrayItem.item.Title}
        year={arrayItem.item.Year}
        type={arrayItem.item.Type}
        navigation={navigation}
        id={arrayItem.item.imdbID}
      />
    );
  };

  return (
    <SafeAreaView style={styles.containerSroll}>
      {!movies ? (
        <Error textError="No movies or series found" />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(arrayItem) => arrayItem.imdbID}
          onEndReached={() => {
            onNextPage(pageNumber);
          }}
          onEndReachedThreshold={0.7}
        />
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
