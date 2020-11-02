import api from "../configuration/api";

export const getDetailsMovie = (titleMovie) => {
  return api.get(`?t=${titleMovie}&apikey=afaf35fd`);
};
