import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logo from '../images/GDSCLogo.jpg'
const Footer = () => {
  return (
    <>
    <div className="footer flex flex-col justify-center items-center h-60">
        <img className="w-32 cursor-pointer" src={logo} alt="" />
        <div className="flex mt-3 gap-4">
      <a href="">
        <FaPhoneAlt className="text-black h-6 w-6 text-xl" />
      </a>
      <a href="">
        <FaEnvelope className="text-black h-6 w-6 text-xl" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <FaFacebookF className="text-white rounded-xl h-6 w-6 bg-black text-xl" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <FaLinkedinIn className="text-white bg-black h-6 w-6 text-xl" />
      </a>
    </div>
    <div className="mt-2"> 
    Copyright ©DJSCE-GDSC | All right reserved
    </div>
      </div>
    </>
  )
}

export default Footer