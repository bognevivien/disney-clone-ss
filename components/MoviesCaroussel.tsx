import { Movie } from "@/typings";
import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MoviesCaroussel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2>{title}</h2>
      <div>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCaroussel;
