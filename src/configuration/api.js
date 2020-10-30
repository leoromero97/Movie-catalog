import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "http://www.omdbapi.com",
  timeout: 30000,
});

export default api;
