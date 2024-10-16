"use client";

import HomeLayout from "@/components/HomeLayout";
import { Movie } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie | undefined>();
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Highlander",
      release_date: "1986-03-07",
      runtime: 116,
      mpaa_rating: "R",
      description: "Some long description",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <HomeLayout>
      <h2 className="text-3xl font-bold ">Movie: {movie?.title}</h2>
      <p className="text-sm italic">
        {movie?.release_date}, {movie?.runtime} minutes, Rated{" "}
        {movie?.mpaa_rating}
      </p>
      <hr className="my-2" />
      <p>{movie?.description}</p>
    </HomeLayout>
  );
};

export default MovieDetail;
