import React, { useState, useEffect } from "react";

// IMPORT LOGOS (logo1.jpeg -> logo8.jpeg)
import logo1 from "../assets/frontend_assets/logo1.jpeg";
import logo2 from "../assets/frontend_assets/logo2.jpeg";
import logo3 from "../assets/frontend_assets/logo3.jpeg";
import logo4 from "../assets/frontend_assets/logo4.jpeg";
import logo5 from "../assets/frontend_assets/logo5.jpeg";
import logo6 from "../assets/frontend_assets/logo6.jpeg";
import logo7 from "../assets/frontend_assets/logo7.jpeg";
import logo8 from "../assets/frontend_assets/logo8.jpeg";

const logosOriginal = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

// Shuffle function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Randomize logos order
const logos = shuffleArray(logosOriginal);

export default function NewsLetter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Carousel Container with Peek Effect */}
        <div className="relative h-48 flex items-center justify-center overflow-hidden">
          {/* All logos positioned absolutely */}
          {logos.map((logo, index) => {
            // Calculate position relative to current index
            let position = index - currentIndex;

            // Handle wrap around
            if (position < -2) position += logos.length;
            if (position > 2) position -= logos.length;

            // Determine styles based on position
            const isCenter = position === 0;
            const isVisible = Math.abs(position) <= 1;

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out flex items-center justify-center"
                style={{
                  transform: `translateX(${position * 300}px) scale(${isCenter ? 1 : 0.7})`,
                  opacity: isCenter ? 1 : isVisible ? 0.3 : 0,
                  zIndex: isCenter ? 10 : 1,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                <img
                  src={logo}
                  alt={`logo-${index + 1}`}
                  className="h-40 w-auto object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-8 bg-gray-800"
                : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
