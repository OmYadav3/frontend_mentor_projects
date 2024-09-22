import React, { useState } from "react";
import logo from "/logo.svg";
import openmenu from "/icon-menu.svg";
import closemenu from "/icon-menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden md:block">
        <din className="nav flex justify-center md:gap-[40rem] my-14  ">
          <div className="logo">
            <img src={logo} alt="image not found" />
          </div>
          <div>
            <ul className="flex md:gap-12 opacity-80 ">
              <li className="hover:text-yellow-500">Home</li>
              <li className="hover:text-yellow-500">News</li>
              <li className="hover:text-yellow-500">Popular</li>
              <li className="hover:text-yellow-500">Trending</li>
              <li className="hover:text-yellow-500">Categories</li>
            </ul>
          </div>
        </din>
      </div>
      <div className="navbar md:hidden">
        <div className="flex justify-between p-2 my-4">
          <img src={logo} alt="" />
          <img onClick={toggleNavbar} src={openmenu} alt="" />
        </div>
        {isOpen && (
          <div className="fixed flex justify-end   h-screen w-screen top-0 right-0 z-10 ">
            <div className="h-full w-[35vw] bg-zinc-900 opacity-50">

            </div>
            <div className="w-[65vw] bg-white h-full ">
            <div className="flex justify-end p-4">
           <img className =" " onClick={toggleNavbar} src={closemenu} alt="" />
            </div>
            <ul className="flex flex-col md:gap-12 text-lg font-semibold gap-5 p-4 ">
              <li className="hover:text-yellow-500">Home</li>
              <li className="hover:text-yellow-500">News</li>
              <li className="hover:text-yellow-500">Popular</li>
              <li className="hover:text-yellow-500">Trending</li>
              <li className="hover:text-yellow-500">Categories</li>
            </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
