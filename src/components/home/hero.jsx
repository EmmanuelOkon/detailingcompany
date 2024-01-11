import React from "react";
import heroImage from "../../assets/images/heroImage.png";

const Hero = () => {

  return (
    <div className="bg-mainBlack pt-10 ">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="   w-full ">
          <div className="flex items-center justify-between">
            <div className="w-1/2  ">
              <h1 className="text-yellow text-4xl font-medium sm:text-6xl ">
                Detailing your <br /> car has never <br />
                <span className="text-white px2">been </span>
                eiser.
              </h1>
              <p className="text-white mt-6 text-[16px] leading-normal lg:text-lg font-normal lg:leading-8">
                we providing high-quality <br /> detailing services
              </p>
              <button className=" py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-gradient-to-tr hover:from-yellow hover:from-5% hover:to-[#8E780D] hover:to-90% lg:font-medium ">
                Our services
              </button>
              <button className="ml-5 py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-white outline-none lg:font-medium">
                Contact us
              </button>
            </div>
            <div className="lg:w-1/2 h-auto justify-center">
              <img
                className="w[80%] rounded-lg md:rounded-2xl h-auto md:w[60%] lg:w-[613px] lg:h[500px] lg:w[750px] "
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
