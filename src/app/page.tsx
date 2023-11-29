import axios from "axios";
import React from "react";

import { IResponseNowPlaying } from "@/lib/types/api";
import MovieCard from "@/components/MovieCard";

const getMovieData = async () => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.API_KEY}&language=en-US`,
    );

    return result.data as IResponseNowPlaying;
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const movieData = await getMovieData();

  return (
    <div className="container grid grid-cols-4 gap-4">
      {movieData?.results.map((movie) => (
        <MovieCard href={`/movies/${movie.id}`} data={movie} />
      ))}
    </div>
  );
};

export default Home;
