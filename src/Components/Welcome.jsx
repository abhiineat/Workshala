import React from "react";
import Navbar from './Navbar'
import welcome from '../assets/welcomephoto.png'

function Welcome() {
    return(
    <>
    <Navbar/>
    <div className="bg-[#FFAEB6] bg-opacity-[12%] h-[58rem] ">
      <div className="flex mt-10 flex-wrap md:flex-nowrap">
        <div className="md:ml-5 md:mt-10 m-0 "><img src={welcome}/></div>
        <div className="bg-white h-[55rem] w-full mt-11  md:ml-8 ml-0 font-sans">
            <div className="mt-5 md:ml-10 ml-0 ">
           <div className="text-[3rem] font-600 flex justify-center md:justify-start">Welcome</div>
           <div className="bg-[#FFAEB6] bg-opacity-[20%]  justify-center w-1/2 rounded-xl mt-5 hidden md:flex "><div>Your account is created successfully. Let's get started</div></div>
           <div className="text-[1.5rem] mt-8 font-500 flex justify-center md:justify-start">Work Status</div>
           <div className=" flex justify-evenly flex-wrap mt-5 ">
            <div className="border-2 border-black rounded-xl justify-center">
                <div className="md:py-2 md:pr-12 md:pl-8 p-1">
                <div className="text-2xl md:m-0">I'm Experienced</div>
                <div className="text-sm mt-3">I have Work Experience <br></br> ( Excluding Internships)</div>
                </div>
            </div>
            <div className="border-2 border-black rounded-xl mt-5 md:m-0">
                <div className="md:py-2 md:px-8 p-1 ">
             <div className="text-2xl ">I'm Fresher</div>
             <div className="text-sm mt-3">I am a Student <br></br>Haven't Worked after Graduation</div>
             </div>
            </div>
           </div>
           <div className="text-[1.5rem] mt-8 font-500 flex justify-center md:justify-start" >Your Skills</div>
           <div className="flex justify-evenly flex-wrap">
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl mt-5 md:m-0" >Finance</button>
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl mt-5 md:m-0" >Architecture</button>
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl mt-5 md:m-0" >Consultancy</button>
           
           </div>
           <div className="flex justify-evenly mt-5 flex-wrap">
           <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl ml-4" >Design</button>
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-10  rounded text-xl mt-5 md:m-0" >IT and Software</button>
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-8 rounded text-xl mt-5 md:m-0" >Database</button>
           </div>
           <div className="flex justify-evenly mt-5 flex-wrap"> 
           <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl ml-5 mt-5 md:m-0" >Marketing</button>
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl mt-5 md:m-0" >Writing</button>
            <button className="bg-[#DEC1FF] py-1 bg-opacity-50 px-6 rounded text-xl mr-4 mt-5 md:m-0" >Web Development</button>
           </div>
           <div className="border-2 border-customColor flex w-40 justify-center  ml-16 md:ml-40 mt-10 rounded-xl "><div className="py-1 px-10 text-xl" >Submit</div></div>

        </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Welcome