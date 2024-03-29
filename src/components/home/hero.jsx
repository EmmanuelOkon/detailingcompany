import React from "react";
import heroImage from "../../assets/images/heroImage.png";
import dotGrid from "../../assets/images/dotGrid.png";
import dotGridMob from "../../assets/images/dotGridMob.png";
import ellipse from "../../assets/images/ellipse.png";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="bg-mainBlack md:pt-8 ">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="w-full ">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <img
              src={ellipse}
              alt="ellipse"
              className="w-2/3 md:w-[35%] h-auto absolute top-0 left-0"
            />
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-[120px] ">
                <img
                  src={isMobile ? dotGridMob : dotGrid}
                  alt="dots"
                  className="w-2/3 md:w-full h-auto -bottom-10 md:-bottom-12 left-8 md:left-12 transform -translate-x-1/2 absolute"
                />
              </div>
              <h1 className="heroText text-yellow text-[55px] md:text-5xl lg:text-7xl  leading-[1.2] md:leading-none font-medium ">
                Detailing your car has never
                <span className="heroText text-white pr-1 lg:px2 inline-flex">
                  been
                </span>
                eiser.
              </h1>

              <p className="text-white mt-6 text-[16px] leading-normal lg:text-lg font-normal lg:leading-8">
                we providing high-quality <br /> detailing services
              </p>
              <div className="mt-6">
                <button className=" py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-gradient-to-tr hover:from-yellow hover:from-5% hover:to-[#8E780D] hover:to-90% hover:text-white lg:font-medium ">
                  Our services
                </button>
                <button className="module hidden border-2 border-white hover:bg-yellow hover:text-black md:inline-flex ml-5 py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-white outline-none lg:font-medium">
                  Contact us
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-auto justify-center">
              <img
                className="w[80%] rounded-lg md:rounded-2xl h-auto md:w-[400px] lg:w-[600px] "
                src={heroImage}
                alt="heroImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
