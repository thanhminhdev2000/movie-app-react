"use client";

import Image from "next/image";
import { useEffect } from "react";
import HomeLayout from "../components/HomeLayout";
import useAuthStore from "@/store/authStore";
import apiClient from "@/config/apiClient";

const Home = () => {
  const { login, logout } = useAuthStore();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          return;
        }

        const response = await apiClient.get("/users/profile", {
          withCredentials: true,
        });

        const data = response.data;

        if (data.id && accessToken) {
          login(data, accessToken);
        }
      } catch {
        logout();
      }
    };

    getUserProfile();
  }, [login, logout]);

  return (
    <HomeLayout>
      <h2 className="text-4xl text-center font-bold">
        Find a movie to watch tonight!
      </h2>

      <hr className="mt-4" />

      <div className="flex justify-center">
        <Image
          src="/ticket.jpg"
          alt="Movie Ticket"
          width="0"
          height="0"
          sizes="100vw"
          className="w-1/4 h-auto"
          priority
        />
      </div>
    </HomeLayout>
  );
};

export default Home;
