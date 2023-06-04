import React from "react";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";



async function MoviePage({ params, searchParams }) {
  const MovieDetail = await getMovie(params.id);
  
  if (!MovieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error Happened!");
  }

  return <MovieContainer movie={MovieDetail} />;
}

export default MoviePage;
