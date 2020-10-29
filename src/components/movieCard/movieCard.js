import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function MovieCard({ poster, title, year, type }) {
  return (
    <View style={styles.containerMovieCard}>
      <Image style={styles.movieImgPreview} source={poster} />
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{year}</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMovieCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 10,
  },

  movieImgPreview: {
    height: 140,
    width: 90,
    marginHorizontal: 20,
  },

  text: {
    fontSize: 14,
    marginVertical: 4,
  },
});
