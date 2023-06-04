import React from 'react'
import LoadingCategories from '@/components/categories/loading'
import FeatureMovieLoading from '@/components/featured-movies/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <LoadingCategories />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  )
}

export default Loading