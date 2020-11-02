import React, { useState } from "react";
import Movie from "../../components/movie/movie";

export default function ScreenMovie() {
  {
    /*const [movieDetail, setMovieDetail] = useState([]);

  const detail = (details) => {
    const detailMovies = getDetailsMovie(details);
    detailMovies.then((res) => {
      setMovieDetail(res.data.Search);
    });
  };
 */
  }
  return (
    <Movie
      poster={{
        uri:
          "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      }}
    />
  );
}
