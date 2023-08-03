import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({ selectedCagetory }) => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCagetory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((genre) => genre.id === +selectedCagetory.id)
              .name
          }
          movies={selectedCagetory.movies}
        />
      )}

      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
