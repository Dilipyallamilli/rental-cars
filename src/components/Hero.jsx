import React from "react";
import hero from "../assets/hero.webp";
import  blueJaguar  from "../assets/blue-jaguar.webp";
import interior from "../assets/interior.webp";
import speedometer from "../assets/bugatti-speedo.webp";
import bugattiengine from "../assets/bugattiengine.webp";
import { useEffect } from "react";


const Hero = () => {
  useEffect(() => {
    preloadImage(hero);
  }, []);
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

  return (
    // hero container
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0  mx-auto mb-16  p-4  max-w-[1100px] sm:mb-20">
      {/* hero left  */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-lg font-semibold text-gray-500 ">Rental-Car's</h2>
        <h2 className="text-5xl font-extrabold uppercase md:text-7xl ">
          Best& Luxury<span className="text-orange-900">car's</span>
        </h2>
        <div>
          <h4 className="mb-2 text-xl font-semibold md:text-3xl ">
            Drive The Car You {" "}
            <span className="text-blue-700 ">Want! </span>
        
          </h4>
        </div>
        <div className="flex justify-center mb-2 lg:justify-start ">
          <div className="flex gap-4">
            <div className="w-20 ">
              <img
                src={speedometer}
                alt="speedometer"
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-20 ">
              <img
                src={bugattiengine}
                alt="bugattiengine"
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-20 ">
              <img
                src={interior}
                alt="interior"
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-1 text-lg font-semibold">Book Ride With Rental-Car's</h4>
        </div>
        <div className="flex justify-center gap-4 font-medium lg:justify-start">
          <button className="px-4 py-2 text-base text-white transition-all duration-700 bg-black border-2 border-black rounded hover:bg-yellow-400 ">
            Book a Ride
          </button>
          <button className="px-4 py-2 text-base transition-all duration-700 border-2 border-black rounded hover:bg-black hover:text-white ">
            Explore
          </button>
        </div>
      </div>
      {/* hero right  */}
      <div className=" flex w-full h-[350px] sm:h-[600px] object-contain bg-gradient-to-t from--500 via--900 to--500 rounded-tl-md ">
        <img
          src={blueJaguar}
          alt="audi"
          className="object-contain transform -scale-x-100"
        />
      </div>
    </div>
  );
};

export default Hero;