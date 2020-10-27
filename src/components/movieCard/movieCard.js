import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

export default function MovieCard({ poster, title, year, type }) {
  return (
    <View style={styles.containerMovieCard}>
      <Image style={styles.movieImgPreview} source={poster} />
      <View>
        <Text style={styles.textPreview}>{title}</Text>
        <Text style={styles.textPreview}>{year}</Text>
        <Text style={styles.textPreview}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMovieCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },

  movieImgPreview: {
    height: 140,
    width: 90,
    marginHorizontal: 20,
  },

  textPreview: {
    fontSize: 14,
    margin: 2,
  },
});
