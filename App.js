import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ListMovies from "./src/components/containerMovieCard/containerMovieCards";
import Search from "./src/components/search/search";
import ARRAYMOVIES from "./src/services/arrayMovie";

export default function App() {
  return (
    <View style={styles.container}>
      <Search placeholder="Enter search term" onSearch={() => {}} />
      <ListMovies movies={ARRAYMOVIES} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    width: "100%",
    backgroundColor: "#fff",
  },
});
