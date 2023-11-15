import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Salary from '../assets/Salary.png'
import Shuttle from '../assets/Shuttle.png'
import Work from '../assets/Work from home.png'
import Time from '../assets/Back in time.png'
import Tata from '../assets/tata logo.png'
import Name from '../assets/tataname.png'

const Companycard = () => (
  <div className="text-worksans shadow-custom p-8">
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
   <div className="text-card-text cursor-pointer">View Details</div>
  </div>
)
const numberOfCards = 15;
const Companycards = [];
for (let i = 0; i < numberOfCards; i += 3) {
    Companycards.push(
      <div key={i} className="flex justify-evenly my-5 md:my-10 flex-wrap mx-5">
       <Companycard/>
       <Companycard/>
       <Companycard/>
      </div>
    );
  }
function Jobs() {
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
       <Footer/>
         </>

    )
}
export default Jobs