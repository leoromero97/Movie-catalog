import api from "../configuration/api";

const apikey = "afaf35fd";

export const getMovies = (textMovie) => {
  return api.get("", { s: textMovie, apikey });
};

export const getDetailsMovie = (id) => {
  return api.get("", { i: id, apikey });
};
