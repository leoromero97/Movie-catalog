import * as React from "react";

import { View } from "react-native";
import Search from "../components/search/search";
import ListMovies from "../components/containerMovieCard/containerMovieCards";
import ARRAYMOVIES from "../services/arrayMovie";

export default function SearchMovie() {
  return (
    <View>
      <Search placeholder="Enter a search from" />
      <ListMovies movies={ARRAYMOVIES} />
    </View>
  );
}
