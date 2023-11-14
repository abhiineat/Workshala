import { useState } from 'react';
import React from "react";
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";

function Navbar () {
  const [showMenu, setShowMenu] = useState(false);

  const hamburger = () => {
    setShowMenu(!showMenu);
  };

  return (
   <div className="w-full  flex justify-between px-4 md:px-8 items-center  md:h-20 h-max">
    <div className="flex justify-between w-1/3 gap-20">
      <Link to= '/'>
    <div className="flex text-3xl font-semibold font-inter">
    <div className="text-custom-text">WORK</div>
    <div>SHALA</div>
    </div>
    </Link>
    <ul className='lg:flex hidden gap-6 text-xl m-2 '>
       <Link to='/'> <li className="text-custom-text">Home</li></Link>
        <li>Services</li>
         <Link to='/companies'><li>Companies</li></Link>
         <Link to='/jobs'><li>Jobs</li></Link>
    </ul>
    
    </div>
    <div className="lg:flex hidden gap-5 text-xl justify-center items-center">
        <div>SignIn</div>
        <div>
        <button className="bg-custom-bg rounded text-white py-2 px-4">Register</button></div>
    </div>
    <div className='mt-20 lg:hidden'>
    <ul className={` lg:hidden ${showMenu ? "flex-col" : "hidden" } flex-col justify-center items-center absolute w-full top-20 right-0 bg-white border-2 border-customColor`}>
          <Link to="/">
            {" "}
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center'>Home</div>
          </Link>
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center'>Services</div>
          <Link to="/companies">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center'>Companies</div>
          </Link>
          <Link to="/jobs">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center'>Jobs</div>
          </Link>
  
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center'>Register</div>
      
  
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center'>Login</div>
        
        </ul>
        </div>

    <div className="lg:hidden" onClick={hamburger}>
      <FaBars/>
    </div>
   </div>
  )
}
export default Navbar
