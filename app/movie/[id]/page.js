import React from "react";
import { notFound } from "next/navigation";

import Movies from "@/mocks/movies.json";
import MovieContainer from "@/containers/movie";

const MoviePage = ({ params, searchParams }) => {
  const movieDetails = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetails) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }

  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
