import { Fragment, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { IoCloseCircleOutline } from "react-icons/io5";

import Logo from "../../src/assets/images/logo.png";
import { HiOutlineBars2 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
];

const mobileNavigation = {
  menu: [
    { name: "Home", href: "/" },
    { name: "our services", href: "/services" },
    { name: "testimonials", href: "/testimonials" },
    { name: "about us", href: "/about" },
    { name: "get in touch", href: "/contact" },
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header
      className={classNames(
        mobileMenuOpen ? "" : "z-[900]",
        "bg-mainBlack top-0 w-full"
      )}
    >
      <nav
        className="bg-mainBlack mx-auto lg:lg:max-w-7xl 2xl:max-w-[1560px] px-4 lg:px-8 py-3 flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/">
            <img
              className="w-[200px] lg:h-full lg:w-[270px] sm:h-auto"
              src={Logo}
              alt="Detailing Company Logo"
              width="300"
              height="200"
            />
          </NavLink>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineBars2
              className="h-6 w-6 text-yellow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Popover.Group className="hidden md:flex md:gap-x-4 items-center">
            {navigation.map((item) => (
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) => {
                  return (
                    "px-2 py-2 text-[20px] font-medium text-white lowercase font-poppins" +
                    (isActive
                      ? " text-yellow text-lg"
                      : " hover:text-yellow hover:text-opacity-70 lowercase text-opacity-80 ")
                  );
                }}
              >
                {item.name}.
              </NavLink>
            ))}
          </Popover.Group>
          <NavLink
            rel="noreferrer"
            to="/contact"
            className="ml-5 lowercase py-2 px-5 lg:px-6 text-base md:px-3 md:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-red-700 lg:font-medium "
          >
            Contact us
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* <div className="fixed inset-0 z-10" /> */}
        <Dialog.Panel className="bg-mainBlack fixed inset-y-0 right-0 z-10 w-full overflow-y-auto h-full sm:ring-1 sm:ring-yellow">
          <div className="flex px-6 py-4 items-center justify-end z-[900]">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoCloseCircleOutline
                className="h-8 w-8 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 w-full py-6 px-6">
                {mobileNavigation.menu.map((item) => (
                  <Fragment key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => {
                        return (
                          "-mx-3 block font-medium px-3 py-2 text-[25px] leading-6 w-full lowercase " +
                          (isActive
                            ? "  text-yellow "
                            : "text-white  hover:text-yellow")
                        );
                      }}
                    >
                      {item.name}.
                    </NavLink>
                  </Fragment>
                ))}
              </div>
              <NavLink
                rel="noreferrer"
                to="/contact"
                className="ml-5 mt-6 lowercase py-2 px-5 lg:px-6 text-base md:px-3 md:text-lg font-medium rounded-full text-black bg-gradient-to-br from-yellow from-5% to-[#8E780D] to-90% outline-none hover:bg-red-700 lg:font-medium "
              >
                Contact us
              </NavLink>
              <div className="px-5 mt-4 py-2">
                <h3 className="text-2xl font-semibold text-white tracking-wider">
                  socials.
                </h3>
                <div className="mt-4 flex space-x-6">
                  {mobileNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-lemonGreen"
                    >
                      <img
                        className="w-[30px] h-[30px] "
                        src={item.icon}
                        alt={item.name}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
