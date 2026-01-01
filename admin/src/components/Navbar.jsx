import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center  py-2 px-6 justify-between">
      <img className="h-8 w-auto sm:h-10 md:h-12" src={assets.logo} alt="logo" />
      <button
        onClick={() => setToken("")}
        className=" bg-gray-100 border border-1 border-gray-300 text-gray-700 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
