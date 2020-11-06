import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Movie from "./components/movie/movie";
import { getDetailsMovie } from "../../services/movies";

export default function ScreenMovie({ route }) {
  const { id, title } = route.params;

  const [movieDetail, setMovieDetail] = useState();

  const detail = (movieID) => {
    const detailMovies = getDetailsMovie(movieID);
    detailMovies.then((res) => {
      setMovieDetail(res.data);
    });
  };

  useEffect(() => {
    detail(id);
  }, [id, title]);

  return (
    <>
      {movieDetail ? (
        <Movie
          title={movieDetail.Title}
          poster={{ uri: movieDetail.Poster }}
          navigation={movieDetail.navigation}
          description={movieDetail.Plot}
          genre={movieDetail.Genre}
          directed={movieDetail.Director}
          runtime={movieDetail.Runtime}
          rated={movieDetail.Rated}
          rating={movieDetail.imdbRating}
          year={movieDetail.Year}
          meta={movieDetail.Metascore}
        />
      ) : (
        <Text>Cargando...</Text>
      )}
    </>
  );
}
