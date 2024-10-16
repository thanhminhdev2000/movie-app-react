import React from "react";
import Link from "next/link";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Link href="/" className="block p-2 border-b-2 hover:bg-gray-200">
          Home
        </Link>
        <Link href="/movies" className="block p-2 border-b-2 hover:bg-gray-200">
          Movies
        </Link>
        <Link href="/genres" className="block p-2 border-b-2 hover:bg-gray-200">
          Genres
        </Link>
        <Link
          href={`/admin/movie/0`}
          className="block p-2 border-b-2 hover:bg-gray-200"
        >
          Add Movie
        </Link>
        <Link
          href="/manage-catalogue"
          className="block p-2 border-b-2 hover:bg-gray-200"
        >
          Manage Catalogue
        </Link>
        <Link href="/graphql" className="block p-2  hover:bg-gray-200">
          GraphQL
        </Link>
      </div>

      <div className="w-3/4 flex flex-col ">{children}</div>
    </div>
  );
};

export default HomeLayout;
