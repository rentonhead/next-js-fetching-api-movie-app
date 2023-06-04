import React from "react";

import FeaturedMovie from "@/components/featured-movies";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({ topRatedMovies = [], popularMovies = [], categories = [], selectedCategory }) {
  const PopularMoviesTitle = "Popular Films".toLocaleUpperCase("en-US");
  const TopRatedrMoviesTitle = "Top Rated Films".toLocaleUpperCase("en-US");

  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
       <MoviesSection
       title={
         categories.find((genre) => `${genre.id}` === selectedCategory.id)?.name
           ?.toLocaleUpperCase("en-US")
       }
       movies={selectedCategory.movies}
     />
     
      )}
      <MoviesSection
      title={TopRatedrMoviesTitle}
        movies={topRatedMovies.slice(0, 7)}
      />
      <MoviesSection
        title={PopularMoviesTitle}
        movies={popularMovies.slice(0, 14)}
      />
    </div>
  );
}

export default HomeContainer;
