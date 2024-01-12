import React from "react";
import aboutPeople from "../../assets/images/aboutPeople.png";

const About = () => {
  return (
    <div className="bg-mainBlack">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-yellow text-[55px] pb-16 ">about us</h2>
        <div className="md:flex flex-col items-center md:flex-row ">
          <div className="pb-6 border-b md:border-b-0 md:border-r border-[#453636] w-fit pr-5 ">
            <img src={aboutPeople} alt="aboutPeople" />
          </div>
          
          <div className="flex items-center">
            <p className="text-white max-w-[890px] pt-6 md:pt-0 md:pl-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
