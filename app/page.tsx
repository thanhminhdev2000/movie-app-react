"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeLayout from "../components/HomeLayout";

const Home = () => {
  const router = useRouter();
  const [jwtToken, setJwtToken] = useState("");

  return (
    <div className="flex flex-col mt-3">
      {!jwtToken ? (
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-20 self-end"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      ) : (
        <Header userName="Minh" />
      )}

      <HomeLayout>
        <h2 className="text-4xl text-center font-bold">
          Find a movie to watch tonight!
        </h2>

        <hr className="mt-4" />

        <div className="flex justify-center">
          <Image
            src="/ticket.jpg"
            alt="Movie Ticket"
            width={300}
            height={200}
            className="rounded"
          />
        </div>
      </HomeLayout>
    </div>
  );
};

export default Home;
