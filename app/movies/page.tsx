"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import { Movie } from "@/types";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "Some long description",
      },
      {
        id: 2,
        title: "Raiders of the Lost Ark",
        release_date: "1981-06-12",
        runtime: 115,
        mpaa_rating: "PG-13",
        description: "Some long description",
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <HomeLayout>
      <h1 className="text-4xl text-center font-bold">Movies</h1>
      <hr className="mt-4" />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Movie
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Release Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {movies.map((item) => (
            <tr key={item.id} className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap underline">
                <Link href={`/movies/${item.id}`}>{item.title}</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.release_date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.mpaa_rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </HomeLayout>
  );
};

export default Movies;
