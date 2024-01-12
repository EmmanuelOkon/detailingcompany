import React from "react";
import heroImage from "../../assets/images/heroImage.png";
import dots from "../../assets/images/dotGrid.png";
import ellipse from "../../assets/images/ellipse.png";

const Hero = () => {
  return (
    <div className="bg-mainBlack md:pt-8 ">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="w-full ">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <img src={ellipse} alt="ellipse" className="w-[35%] h-auto absolute top-0 left-0" />
            <div className="w-full md:w-1/2 relative">
              <img
                src={dots}
                alt="dots"
                className="w-[15%] h-auto top-0 -left-4 absolute"
              />
              <h1 className=" text-yellow text-[55px] leading-none font-medium sm:text-6xl ">
                Detailing your car has never
                <span className="text-white px-2 inline-flex">been </span>
                eiser.
              </h1>
              <p className="text-white mt-6 text-[16px] leading-normal lg:text-lg font-normal lg:leading-8">
                we providing high-quality <br /> detailing services
              </p>
              <div className="mt-6">
                <button className=" py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-gradient-to-tr hover:from-yellow hover:from-5% hover:to-[#8E780D] hover:to-90% lg:font-medium ">
                  Our services
                </button>
                <button className="hidden border-2 border-white md:inline-flex ml-5 py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-white outline-none lg:font-medium">
                  Contact us
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-auto justify-center">
              <img
                className="w[80%] rounded-lg md:rounded-2xl h-auto md:w[60%] lg:w-[600px] "
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
