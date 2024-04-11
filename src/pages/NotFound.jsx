import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#FEBF19]">
      <div className="bg-white p-16 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold pb-2">404</h1>
        <p className="text-2xl">Page Not Found :(</p>
        <NavLink
          to="/home"
          className="absolute right-25 bottom-20 flex bg-slate-100 p-3 rounded-xl"
        >
          Back to Home{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
