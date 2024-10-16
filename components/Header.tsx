import React from "react";

const Header = ({ userName }: { userName: string }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 self-end">
        <span>Welcome, {userName}!</span>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => console.log("Logout clicked")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
