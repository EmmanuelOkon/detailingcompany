import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prevActiveElement) =>
        prevActiveElement + 1 >= 5 ? 1 : prevActiveElement + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden z-0 flex h-[300vh] h[calc(100vh-70px)] w-full flex-col justify-center items-center ">
      home
    </div>
  );
};

export default Hero;
