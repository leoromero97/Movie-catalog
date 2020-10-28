import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Movie from "./src/components/movie/movie";

export default function App() {
  return (
    <View style={styles.container}>
      <Movie
        poster={{
          uri:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        }}
        description="Eart is minghtiest heroes must come together and lear to fight as a team if they are going to stop humanity."
        genre="Action, Adventure, Sci-Fi"
        directed="Joss Whedon"
        runtime="143 min"
        rated="PG-13"
        rating="8,1"
        meta="69"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});
