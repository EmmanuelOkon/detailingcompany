import React from "react";
import user from "../../assets/images/user.png";
import ellipse from "../../assets/images/ellipseTwo.png";

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
    // backgroundColor: "#836D6D",
    backgroundColor: "#FFD613",
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
  return (
    <div className="bg-mainBlack relative">
      <div className=" lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-yellow text-[32px] md:text-[55px] pb-16 ">
          testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-5 md:space-y-0 ">
          {testimonialData.map((data) => (
            <div key={data.name} className="">
              <div className="flex w-full items-center pl-6 pb-4">
                <img src={data.icon} alt="user" className="w-[32px] h-auto " />
                <p className="text-white text-[20px] lg:text-[26px] pl-3">{data.name}</p>
              </div>
              <p
                className="w[340px] h-auto h[230px] lg:w-[330px] lg:h[235px] md:w[271px] md:h[194px] text-white text-[20px] p-6 rounded-[50px]"
                style={{
                  backgroundColor: data.backgroundColor,
                  color: data.color,
                }}
              >
                "{data.description}"
              </p>
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
