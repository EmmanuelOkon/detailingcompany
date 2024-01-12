import React from "react";
import MailIcon from "../../assets/images/email.png";
import PhoneIcon from "../../assets/images/phone.png";
import LocationIcon from "../../assets/images/location.png";
import play from "../../assets/images/play.png";

const contact = [
  {
    name: "example@yourmail.com",
    href: "mailto:example@yourmail.com",
    image: MailIcon,
  },
  {
    name: "00553798184",
    href: "tel:+23400553798184",
    image: PhoneIcon,
  },

  {
    name: "531 Runte Trail, Apt. 712, 95223, Durganburgh, Colorado, United States",
    href: "",
    image: LocationIcon,
  },
];

const Contact = () => {
  return (
    <div className="bg-mainBlack ">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px8">
        <h2 className="text-yellow text-[32px] md:text-[55px] pb-16 ">
          get in touch
        </h2>
        <div className="grid sm:grid sm:grid-cols-2 lg:gap-8 rounded-3xl lg:grid-cols-2">
          <div className="lg:p-10 w-full  ">
            <form action="/" className="wfull">
              <div className="flex flex-wrap w-full">
                <input
                  type="text"
                  id="name"
                  className="text-white rounded-full w-full block py-3 px-3 my-2 mb-4 outline-none bg-[#4E4141] placeholder:text-white "
                  autoComplete="off"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="text-white rounded-full w-full block py-3 px-3 my-2 mb-4 outline-none bg-[#4E4141] placeholder:text-white "
                  autoComplete="off"
                  placeholder="Email"
                  required
                />

                <input
                  type="number"
                  id="phone"
                  className="text-white rounded-full w-full block py-3 px-3 my-2 mb-4 outline-none bg-[#4E4141] placeholder:text-white "
                  autoComplete="off"
                  placeholder="Phone number"
                  required
                />

                <textarea
                  className="flex bg-[#4E4141] text-white my2 py-2 px-3 rounded-full w-full placeholder:flex placeholder:items-center outline-none placeholder:text-white resize-none"
                  cols={12}
                  rows={2}
                  id="message"
                  placeholder="Your message"
                  required
                ></textarea>
                <button
                  type="button"
                  className="flex items-center gap-3 py-3 mt-5 lg:mt-7 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-gradient-to-tr hover:from-yellow hover:from-5% hover:to-[#8E780D] hover:to-90% lg:font-medium "
                >
                  Send message <img src={play} alt="play" />
                </button>
              </div>
            </form>
          </div>
          <div className=" flex flex-col justify-between py-6">
            <div className="">
              <ul className="text-center flex flex-col justify-center text-white">
                {contact.map((item) => (
                  <span
                    key={item.name}
                    className="flex flex-row md:justify-start md:w-full my-3 items-start md:px-0 md:flex-row text-left md:items-center text-[18px] md:text-[22px] max-w-[392px] "
                  >
                    <img
                      src={item.image}
                      alt="icon"
                      className="w-[35px] md:w-[50px] h-auto mr-4 "
                    />
                    {item.name}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
