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
    <div className='text-footer-text2'>SHALA</div>
    </div>
    </Link>
    <ul className='lg:flex hidden gap-6 text-xl m-2 '>
       <Link to='/'> <li className="hover:text-custom-text">Home</li></Link>
        <li className='cursor-pointer hover:text-customColor'>Services</li>
         <Link to='/companies'><li className='hover:text-customColor'>Companies</li></Link>
         <Link to='/jobs'><li className='hover:text-customColor'>Jobs</li></Link>
    </ul>
    
    </div>
    <div className="lg:flex hidden gap-5 text-xl justify-center items-center">
        <Link to='/login'><div className='cursor-pointer'>SignIn</div></Link>
        <div>
        <Link to='/register'><button className="bg-custom-bg rounded text-white py-2 px-4 hover:bg-white hover:text-custom-text hover:border-2 border-2">Register</button> </Link></div>
    </div>
    <div className='mt-20 lg:hidden'>
    <ul className={` lg:hidden ${showMenu ? "flex-col" : "hidden" } flex-col justify-center items-center absolute w-full top-20 right-0 bg-white border-2 border-customColor`}>
          <Link to="/">
            {" "}
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Home</div>
          </Link>
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Services</div>
          <Link to="/companies">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Companies</div>
          </Link>
          <Link to="/jobs">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Jobs</div>
          </Link>
  
          <Link to='/register'><div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Register</div></Link>
      
  
            <Link to='/login'> <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Login</div></Link>
        
        </ul>
        </div>

    <div className="lg:hidden" onClick={hamburger}>
      <FaBars/>
    </div>
   </div>
  )
}
export default Navbar
