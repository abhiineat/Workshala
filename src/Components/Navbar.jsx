import React from "react";
import {FaBars} from 'react-icons/fa'

function Navbar () {
  return (
   <div className="w-full  flex justify-between px-4 md:px-8 items-center h-20">
    <div className="flex justify-between w-1/3 gap-20">
    <div className="flex text-3xl font-semibold font-inter">
    <div className="text-custom-text">WORK</div>
    <div>SHALA</div>
    </div>
    <ul className="md:flex hidden gap-6 text-xl m-2">
        <li className="text-custom-text">Home</li>
        <li>Services</li>
        <li>Companies</li>
        <li>Jobs</li>
    </ul>
    </div>
    <div className="lg:flex hidden gap-5 text-xl justify-center items-center">
        <div>SignIn</div>
        <div>
        <button className="bg-custom-bg rounded text-white py-2 px-4">Register</button></div>
    </div>
    <div className="md:hidden">
      <FaBars/>
    </div>
   </div>
  )
}
export default Navbar