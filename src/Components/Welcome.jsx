import React from "react";
import Navbar from './Navbar'
import welcome from '../assets/welcomephoto.png'

function Welcome() {
    return(
    <>
    <Navbar/>
    <div className="bg-[#FFAEB6] bg-opacity-[12%] h-[58rem] ">
      <div className="flex mt-10">
        <div className="ml-5 mt-10 "><img src={welcome}/></div>
        <div className="bg-white h-[55rem] w-full mt-11  ml-8 font-sans">
            <div className="mt-5 ml-10">
           <div className="text-[3rem] font-600">Welcome</div>
           <div className="bg-[#FFAEB6] bg-opacity-[20%] flex justify-center w-1/2 rounded-xl mt-5"><div>Your account is created successfully. Let's get started</div></div>
           <div className="text-[1.5rem]">Work Status</div>
           <div className=" flex">
            <div className="border-2">
                <div>I'm Experienced</div>
                <div>I have Work Experience <br></br> (Excluding Internships)</div>
            </div>
            <div className="border-2">
             <div>I'm Fresher</div>
             <div>I am a Student <br></br>Haven't Worked after Graduation</div>

            </div>
           </div>
           <div>Your Skills</div>
           <div className="flex justify-evenly">
            <div>Finance</div>
            <div>Architecture</div>
            <div>onsultancy</div>
           </div>
           <div className="flex justify-evenly">
            <div>Design</div>
            <div>IT and Software</div>
            <div>Database</div>
           </div>
           <div className="flex justify-evenly"> 
            <div>Marketing</div>
            <div>Writing</div>
            <div>Web Development</div>
           </div>
           <div>Submit</div>

        </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Welcome