import api from "../configuration/api";

const apikey = "afaf35fd";

export const getMovies = (textMovie, page) => {
  return api.get("", { s: textMovie, page, apikey });
};

export const getDetailsMovie = (id) => {
  return api.get("", { i: id, apikey });
};
