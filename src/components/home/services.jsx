import React from "react";
import diamond from "../../assets/images/diamonds.png";
import rectangle from "../../assets/images/rectangle.png";
import play from "../../assets/images/play.png";
import dots from "../../assets/images/dotGrid.png";
import ellipse from "../../assets/images/ellipseTwo.png";

const servicesData = [
  {
    image: diamond,
    title: "paint correction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: rectangle,
    title: "ceramic coating",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: diamond,
    title: "full detail",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: rectangle,
    title: "interior detailing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Services = () => {
  return (
    <div className="bg-mainBlack relative">
      <div className=" lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <img
          src={ellipse}
          alt="ellipse"
          className="w-full md:w-[35%] h-auto absolute top-0 right-0 rotate180"
        />
        <div className="relative">
          <img
            src={dots}
            alt="dots"
            className="w-[10%] h-auto -top-10 -left-4 absolute"
          />
          <h2 className="text-yellow text-[32px] md:text-[55px] relative ">
            our services
          </h2>
        </div>
        <div className=" py-5 wfull ">
          <div className="w-full flex flex-col items-start lg:flex-row  lg  ">
            <div className="lg:w-2/3 grid md:grid-cols-2 gap4 py-4 pt-8 divide-x2 divide-y2 divide-[#524B4B]">
              {servicesData.map((data) => (
                <div
                  key={data.title}
                  className="px-3 lg:px-0 flex flex-row items-start lg:h-[170px]  "
                >
                  <div className="flex items-center mr-4">
                    <img
                      className="text-4xl font-bold text-green"
                      src={data.image}
                      alt="serviceIcon"
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <p className="text-base lg:text-[35px] lowercase py-2 text-yellow ">
                      {data.title}
                    </p>
                    <p className="lg:w-[270px] tracking-wide text-base lg:text-[20px] text-white py-4">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:px-10 lg:h-[380px] lg:w-1/3 flex items-center justify-between lg:flex-col lg:justify-center lg:gap-6 lg:items-start lg:align-middle ">
              <p className="hidden md:inline-flex max-w-[350px] lg:w-[270px] tracking-wide text-base lg:text-[20px] text-white py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="w-fit flex items-center gap-3 py-3 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-gradient-to-tr hover:from-yellow hover:from-5% hover:to-[#8E780D] hover:to-90% lg:font-medium ">
                Get in touch <img src={play} alt="play" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
