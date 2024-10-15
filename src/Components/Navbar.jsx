import React from "react";
import logo from "../images/GDSCLogo.jpg";

function Navbar() {
  return (
    <>
      <div className="flex justify-between fixed top-0  z-[1] bg-white items-center h-md w-full mr-16 px-32 py-4 sm:flex sm:justify-between  sm:items-center">
        <div className="logo cursor-pointer w-sm">
          <img className="max-w-48" src={logo} alt="" />
        </div>
        <div className="flex gap-5 ">
          <div className="cursor-pointer font-Barlow hover:font-bold">Home</div>
          <div className="cursor-pointer font-Barlow hover:font-bold">
            Our Team
          </div>
          <div className="cursor-pointer font-Barlow hover:font-bold">
            Events
          </div>
          <div className="cursor-pointer font-Barlow hover:font-bold">
            Gallery
          </div>
          <div className="cursor-pointer font-Barlow hover:font-bold">
            Contact us
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default Navbar;
