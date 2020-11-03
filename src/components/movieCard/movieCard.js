import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import screens from "../../constants/screens";

export default function MovieCard({
  poster,
  title,
  year,
  type,
  navigation,
  id,
}) {
  return (
    <TouchableOpacity
      style={styles.containerMovieCard}
      onPress={() => navigation.navigate(screens.movie, { id, title })}
    >
      <Image style={styles.movieImgPreview} source={poster} />
      <View style={styles.containerText}>
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
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    marginVertical: 10,
  },

  movieImgPreview: {
    height: 140,
    width: 90,
    marginRight: 16,
  },

  containerText: {
    flex: 1,
  },

  text: {
    fontSize: 14,
    marginVertical: 4,
  },
});
