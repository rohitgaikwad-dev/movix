import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjEzMGJiODRmMWU5ZTFjY2RmZTliMWQ5MGE3ZGExMyIsInN1YiI6IjY1NDEzZGM3NDU1N2EwMDEzYWMwNDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H8iB0O7iowHtviCqx45LqvTDUgHZAP7NIaMXAVi7F9k";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
