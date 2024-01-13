import React from "react";
import user from "../../assets/images/user.png";
import ellipse from "../../assets/images/ellipseTwo.png";
import dotGrid from "../../assets/images/dotGrid.png";
import dotGridMob from "../../assets/images/dotGridMob.png";

const testimonialData = [
  {
    icon: user,
    name: "John Doe",
    description:
      "I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.",
    backgroundColor: "#2B2424",
  },
  {
    icon: user,
    name: "Matthew Age",
    description:
      "I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.",
    backgroundColor: "testimonalBg",
    
    color: "#000",
  },
  {
    icon: user,
    name: "John Second",
    description:
      "I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.",
    backgroundColor: "#2B2424",
  },
];

const Testimonials = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="bg-mainBlack relative">
      <div className=" lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-yellow text-[32px] md:text-[55px] pb-16 ">
          testimonials
        </h2>
        <div className="relative w-[120px] ">
          <img
            src={isMobile ? dotGridMob : dotGrid}
            alt="dots"
            className="w-2/3 h-auto bottom-20 md:bottom-24 left-[30%] transform -translate-x-1/2 absolute"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-5 md:space-y-0 ">
          {testimonialData.map((data, index) => (
            <div key={data.name} className="relative">
              <div className="flex w-full items-center pl-10 pb-7">
                <img src={data.icon} alt="user" className="w-[32px] h-auto " />
                <p className="text-white text-[20px] lg:text-[26px] pl-3">
                  {data.name}
                </p>
              </div>
              <p
                className={`h-auto lg:w-[330px] text-white text-[20px] p-6 rounded-[50px] ${
                  index === 1 ? "testimonalBg" : ""
                }`}
                style={{
                  backgroundColor: index === 1 ? "" : data.backgroundColor,
                  color: data.color,
                }}
              >
                "{data.description}"
              </p>
              <div
                className={`top-10 left-8 w-full`}
                style={{
                  position: "absolute",
                  width: 0,
                  height: 0,
                  borderLeft: "20px solid transparent",
                  borderRight: "20px solid transparent",
                  borderBottom:
                    index === 1
                      ? `35px solid #ffd613`
                      : `35px solid ${data.backgroundColor}`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={ellipse}
        alt="ellipse"
        className="w-full md:w-[35%] h-auto absolute top-0 lef-0 rotate-180"
      />
    </div>
  );
};

export default Testimonials;
