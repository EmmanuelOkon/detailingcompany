import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

const navigation = {
  solutions: [
    { name: "log in", href: "#" },
    { name: "your account", href: "#" },
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "about us", href: "/about" },
    { name: "our services", href: "/services" },
    { name: "contact us", href: "/contact" },
  ],
  social: [
    {
      name: "facebook",
      href: "#",
      icon: facebook,
    },
    {
      name: "instagram",
      href: "#",
      icon: instagram,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-mainBlack" aria-labelledby="footer-heading">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid md:grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols2 md:gap-4">
              <div>
                <NavLink to="/">
                  <img
                    alt="logo"
                    width={14}
                    height={14}
                    src={logo}
                    className="w-[270px] h-auto"
                  />
                </NavLink>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-2xl font-semibold text-white tracking-wider">
                  menu.
                </h3>
                <div className="h-[200px] md:w-[340px]  ">
                  <ul className="mt-4 space-y4 justify-between">
                    {navigation.links.map((item) => (
                      <li key={item.name} className=" py-[0.5rem] ">
                        <NavLink
                          to={item.href}
                          className="text-base font-normal text-white hover:text-lemonGreen lowercase"
                        >
                          {item.name}.
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-2xl font-semibold text-white tracking-wider">
                  account.
                </h3>
                <div className="h-[200px] md:w-fit  ">
                  <ul className="mt-4 justify-between">
                    {navigation.solutions.map((item) => (
                      <li key={item.name} className="py-[0.5rem] ">
                        <NavLink
                          to={item.href}
                          className="text-base font-normal text-white hover:text-lemonGreen lowercase"
                        >
                          {item.name}.
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white tracking-wider">
              follow us.
            </h3>
            <div className="mt-4 flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-lemonGreen"
                >
                  <img className="w-[30px] h-[30px] " src={item.icon} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
