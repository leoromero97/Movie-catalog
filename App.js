import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import MovieCard from "./src/components/movieCard/movieCard";
import Search from "./src/components/search/search";

export default function App() {
  return (
    <View style={styles.container}>
      <Search placeholder="Enter search term" onSearch={() => {}} />
      <MovieCard poster={require("./assets/avengersEndgame.jpg")} title="Avengers Endgame" year="2019" type="Movie" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
