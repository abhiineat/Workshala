import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Salary from '../assets/Salary.png'
import Shuttle from '../assets/Shuttle.png'
import Work from '../assets/Work from home.png'
import Time from '../assets/Back in time.png'
import Tata from '../assets/tata logo.png'
import Name from '../assets/tataname.png'
import drop from '../assets/Down Button.png'
import logo from '../assets/logodetail.png'



const Companycard = ({openJobDetails}) => (
  <div className="text-worksans shadow-custom md:p-8 m-8 md:m-0 flex-col">
    <div className="flex">
      <div>
   <div className="flex items-center"><div className="px-2 border-2 border-black rounded flex items-center gap-2"><div class="w-4 h-4 bg-custom2-bg rounded-full"></div>Actively hiring</div></div>

   <div className="font-semibold text-3xl">Fundraising <br></br> Volunteering</div>
   <div>Odisha Development <br></br>Management programme<br></br>(ODMP)</div>
   </div>
   <div className="flex-col ml-24 mt-5">
   <div className="flex justify-center items-center"><img src={Name}/></div>
   <div  className="flex justify-center items-center"><img src={Tata}/></div>
   </div>
   </div>
   <div>
    <div className="flex justify-between md:gap-10 gap-2 my-2 flex-wrap">
        <div className="flex justify-center items-center gap-2 flex-wrap">
         <div><img src={Work}/></div>
         <div>Work from Home</div>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap">
         <div><img src={Shuttle}/></div>
         <div>Starts Immediately</div>
        </div>
    </div>
    <div className="flex md:gap-28 gap-2  flex-wrap ">
    <div className="flex justify-center items-center gap-2 flex-wrap">
         <div><img src={Time}/></div>
         <div>1 Week</div>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap">
         <div><img src={Salary}/></div>
         <div>225-5,000 /week</div>
        </div>
    </div>
   </div>
   <div className="flex gap-4 md:mb-5 m-5 ">
    <button className="bg-custom-bg bg-opacity-20 rounded text-black text-opacity-60 px-2">Internship</button>
    <button className="bg-custom-bg bg-opacity-20 rounded text-black text-opacity-60 px-2">Part time</button>
   </div>
   <div className="text-card-text">5 Days ago</div>
   <hr class="border-2 border-gray-200 my-4 w-full"/>
   <div className="text-card-text cursor-pointer" onClick={openJobDetails}>View Details</div>
  </div>
)


const Jobdetails = (closeJobDetails) => (
    <div className="font-inter border-2 rounded-lg">
      <div className="flex justify-center mt-5 flex-wrap"><div className="cursor-pointer" onClick={closeJobDetails.closeJobDetails}><img src={drop} style={{width : 40}}/></div></div>
      <div className="flex md:justify-between  justify-center   mt-5 flex-wrap">
        <div className="flex items-center justify-center flex-wrap">
          <div className="md:ml-20"><img src={logo}/></div>
          <div className="ml-4 flex-col justify-center  flex-wrap items-center">
            <div className="text-[2rem] font-semibold">Kraftsbase</div>
            <div>A Full-Service , Design-Driven Studio, For Early And Growing Startups</div>
            <div className="text-[1.5rem]">Full Stack Developer Intern</div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap  sm:ml-60 mt-5">
        <div className=" flex gap-8 md:ml-0  md:mt-0 mt-4 justify md:mr-40">
          <div><button className="border-2 border-black py-1 px-4 rounded font-medium">Apply</button></div>
          <div><button className="border-2 border-black py-1 px-4 rounded font-medium">Save</button></div>
        </div>
        </div>
     
      </div>
      <div className="flex md:ml-24 text-[1.688rem] font-semibold  mt-5">Skills</div>
      <div className="flex gap-4 md:ml-24  md:mt-5 ">
        <div className=""><button className="bg-[#DEC1FF] p-1 rounded-xl">Node.js</button></div>
        <div className=""><button className="bg-[#DEC1FF] p-1 rounded-xl">Node.js</button></div>
      </div>
      <div className="ml-24  mt-5  hidden md:flex"><div className="bg-[#DEC1FF] rounded-xl px-2">HTML5, CSS3, JavaScript, SASS, ReactJS, NextJS, Shopify, MongoDB,<br></br>
Firebase, ExpressJS</div></div>
      <div className="ml-24 text-[1.688rem] font-semibold  mt-5 hidden lg:flex">About the job</div>
      <div className="ml-24  mt-5  hidden lg:flex">Kraftbase is a dynamic full-service studio renowned for its commitment to excellence in Website Development,<br></br>
App Development, and Custom Software Development. We are currently seeking a talented and enthusiastic Full Stack<br></br>
Developer intern to join our innovative team.</div>
    </div>
)
function Jobs() {
  const [isJobDetailsOpen, setJobDetailsOpen] = useState(false);

  const openJobDetails = () => setJobDetailsOpen(true);
  const closeJobDetails = () => setJobDetailsOpen(false);

  const numberOfCards = 15;
const Companycards = [];
for (let i = 0; i < numberOfCards; i += 3) {
    Companycards.push(
      <div key={i} className="flex justify-evenly my-5 md:my-10 flex-wrap mx-5">
       <Companycard openJobDetails={openJobDetails}/>
       <Companycard openJobDetails={openJobDetails}/>
       <Companycard openJobDetails={openJobDetails}/>
      </div>
    );
  }
  
    return( 
         <>
         <Navbar/>
       <div>
         <div className="flex items-center py-10 pl-10 bg-service-bg bg-opacity-10 mb-10 mt-5">
                <p className="text-3xl font-bold font-worksans text-worksans">Jobs for You</p>
        </div>
        <div>
            <div className="bg-opacity-10 flex-wrap md:m-0">
            {Companycards}
            </div>
        </div>
       </div>
       {isJobDetailsOpen && (
        <div className="fixed inset-0  flex items-end justify-center overflow-x-hidden md:overflow-y-auto overflow-y-hidden">
          <div className="relative w-full h-[35rem]  bg-white p-6 rounded-2xl">
            <Jobdetails closeJobDetails={closeJobDetails}/>
          </div>
        </div>
      )}

       <Footer/>
         </>

    )
}
export default Jobs