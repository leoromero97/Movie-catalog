import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import screens from "../../constants/screens";

export default function MovieCard({ poster, title, year, type, navigation }) {
  return (
    <TouchableOpacity
      style={styles.containerMovieCard}
      onPress={() => navigation.navigate(screens.movie)}
    >
      <Image style={styles.movieImgPreview} source={poster} />
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{year}</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
    </TouchableOpacity>
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
