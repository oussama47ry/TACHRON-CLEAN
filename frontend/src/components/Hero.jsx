import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full border border-gray-400" style={{ minHeight: '400px' }}>
      {/* Background Image - fills entire section */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={assets.hero_img}
        alt="hero_img"
        style={{ objectPosition: '25% 50%' }}
      />

      {/* Gradient overlay for text area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.15) 45%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.7) 75%, rgba(255, 255, 255, 0.9) 85%, rgba(255, 255, 255, 1) 95%)'
        }}
      ></div>

      {/* Text content - positioned on top right */}
      <div className="relative z-10 flex justify-end items-center h-full min-h-[400px] px-4 sm:px-8">
        <div className="w-full sm:w-2/5 text-[#414141] py-10">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
