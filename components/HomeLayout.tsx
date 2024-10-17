"use client";

import Link from "next/link";
import useAuthStore from "@/store/authStore";
import Header from "./Header";
import getRoutes from "./constant";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();

  const routes = getRoutes(user?.id || 0);

  return (
    <div className="flex flex-col mt-3">
      <Header />

      <div className="flex">
        <div className="w-1/4 p-4">
          {routes.map((item) => (
            <div key={item.pathName} className="mb-4">
              {item.display && (
                <Link
                  href={item.path}
                  className="block p-2 border-b border-gray-300 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
                >
                  {item.pathName}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="w-3/4 flex flex-col ">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
