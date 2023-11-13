import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Companycard = () => (
  <div className="text-worksans border-2">
   <div className="flex"><div className="px-2 border-2 border-black rounded">Actively hiring</div></div>
   <div className="font-600">Fundraising Volunteering</div>
   <div>Odisha Development Management programme(ODMP)</div>
   <div>
    <div>
        <div>
         <div></div>
         <div>Work from Home</div>
        </div>
        <div>
         <div></div>
         <div>Starts Immediately</div>
        </div>
    </div>
    <div>
    <div>
         <div></div>
         <div>1 Week</div>
        </div>
        <div>
         <div></div>
         <div>225-5,000 /week</div>
        </div>
    </div>
   </div>
   <div>
    <button>Internship</button>
    <button>Part time</button>
   </div>
   <div>5 Days ago</div>
  </div>
)
const numberOfCards = 15;
const Companycards = [];
for (let i = 0; i < numberOfCards; i += 3) {
    Companycards.push(
      <div key={i} className="flex justify-evenly my-5 md:my-10 flex-wrap">
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
            <div className="bg-service-bg bg-opacity-10 flex-wrap md:m-0">
            {Companycards}
            </div>
        </div>
       </div>
       <Footer/>
         </>

    )
}
export default Jobs