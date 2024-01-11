import React from "react";
import diamond from "../../assets/images/diamonds.png";
import rectangle from "../../assets/images/rectangle.png";
import play from "../../assets/images/play.png";

const successData = [
  {
    image: diamond,
    title: "paint correction",
    description:
      "Empowered Over 500 Local Farmers with Fair Trade Practices, Promoting Sustainable Agriculture.",
  },
  {
    image: rectangle,
    title: "ceramic coating",
    description:
      "Our Diverse Product Range Features More Than 30 Fresh Agricultural Goods.",
  },
  {
    image: diamond,
    title: "full detail",
    description:
      "We've Expanded Our Reach to Over 10 Countries, Sharing the Bounty of Our Farms with the Global Community",
  },
  {
    image: rectangle,
    title: "interior detailing",
    description:
      "With a Rich Legacy of over 7 Years, We Bring Expertise to Every Aspect of Farming and Exporting.",
  },
];

const Services = () => {
  return (
    <div className="bg-mainBlack ">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-yellow text-[55px] ">our services</h2>
        <div className=" py-5 wfull ">
          <div className="w-full flex items-center  ">
            <div className="lg:w-2/3 grid lg:grid-cols-2 gap4 py-4 pt-8 divide-x-2 divide-y-2 divide-[#524B4B]">
              {successData.map((data) => (
                <div
                  key={data.title}
                  className="px-3 lg:px-0 flex flex-col lg:h-[170px]  "
                >
                  <div className="flex items-center">
                    <img
                      className="text-4xl font-bold text-green"
                      src={data.image}
                      alt="serviceIcon"
                    />

                    <p className="text-base lg:text-[35px] lowercase py-2 text-yellow ">
                      {data.title}
                    </p>
                  </div>
                  <p className="text-sm text-[#475367] py-4">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3 grid lg:grid-cols-1 ">
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
