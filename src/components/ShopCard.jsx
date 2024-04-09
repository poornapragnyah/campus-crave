import React from "react";
import { NavLink } from "react-router-dom";

const ShopCard = (props) => {
  return (
    <NavLink to={props.href} className="cursor-pointer">
      <div className="bg-white p-4 m-4 rounded-md  cursor-pointer shadow-md hover:scale-105 ease-in-out w-72 relative -z-10">
        <img
          src={props.src}
          alt={props.caption}
          className="rounded-md mb-1 shadow-sm h-44"
        />
        <div className="p-2 ">
          <p className="text-2xl bg rounded-md font-semibold">
            {props.caption}
          </p>
          <p className="text-lg">{props.desc}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 p-2 absolute right-3 bottom-3 bg-slate-100 rounded-full "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </NavLink>
  );
};

export default ShopCard;
