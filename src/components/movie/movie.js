import * as React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default function Movie({
  poster,
  description,
  genre,
  directed,
  runtime,
  rated,
  rating,
  year,
  meta,
}) {
  return (
    <View style={styles.containerMovie}>
      <Image style={styles.moviePoster} source={poster} />
      <View>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>Year: {year}</Text>
        <Text style={styles.text}>Genre: {genre}</Text>
        <Text style={styles.text}>Directed by: {directed}</Text>
        <Text style={styles.text}>Runtime: {runtime}</Text>
        <Text style={styles.text}>Rated: {rated}</Text>
        <Text style={styles.text}>IMBD Rating: {rating}</Text>
        <Text style={styles.text}>Meta score: {meta}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMovie: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },

  moviePoster: {
    height: 300,
    width: 200,
    margin: 10,
  },

  text: {
    fontSize: 14,
    marginVertical: 4,
  },
});
