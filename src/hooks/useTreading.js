import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrending = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  useEffect(() => {
     getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    console.log("Trending movies data:", data);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };


};

export default useTrending;