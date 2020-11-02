import api from "../configuration/api";

export const getMovies = (textMovie) => {
  return api.get("", { s: textMovie, apikey: "afaf35fd" });
};
