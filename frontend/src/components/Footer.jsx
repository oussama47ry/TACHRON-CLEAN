import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-2 my-2 mt-4 text-xs">
        <div>
          <img src={assets.logo} className="mb-1 w-24" alt="" />
          <p className="w-full md:w-4/5 text-gray-600 text-justify">
            Your scent expedition starts now. At Raid of Parfums, we've curated an exceptional collection of rare and bold fragrances. Our mission: to help you discover and capture your signature scent. Skip the overwhelming counters—join a targeted raid where every find is a prized possession.          </p>
        </div>
        <div>
          <p className="text-base font-medium mb-1">STORE</p>
          <ul className="flex flex-col gap-0.5 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-base font-medium mb-1">GET IN TOUCH</p>
          <ul className="flex flex-col gap-0.5 text-gray-600">
            <li>+212 715 77 91 09</li>
            <li>oussama444ryad@gmail.com</li>
            <li className="cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-2 text-xs text-center">
          Copyright 2025@ ORyad - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
