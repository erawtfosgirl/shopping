import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { SlHeart } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center border-gray-100 px-3 py-2 rounded-full bg-gray-100">
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Search..."
        />
        <RiSearch2Line size={22} className="text-gray-400" />
      </div>
      <SlHeart size={22} />
      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-purple-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
          1
        </div>
        <SlBasket size={22} />
      </div>
    </div>
  );
};

export default NavbarRight;
