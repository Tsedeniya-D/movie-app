import axios from "axios";

const API_KEY="9fea623f23e543430f6051d949062346";
const BASE_URL="https://api.themoviedb.org.3";

export const fetchMovies=async() => {
  const {data}=await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovies=async(query)=> {
  const {data}=await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return data.results;
};
