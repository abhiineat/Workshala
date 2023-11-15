import React from "react";
import tutorial from '../assets/Tutorials.png'

function Services () {
    return (
     <div className="bg-service-bg h- bg-opacity-20 flex-col flex-wrap">
       <div  className="justify-center items-center flex flex-wrap">Services</div>
       <div className="justify-center items-center flex text-3xl font-bold">Our Services</div>
       <div className="flex justify-center flex-wrap">
       <div className="flex justify-evenly flex-wrap gap-8 m-8">
        <div className="flex flex-wrap gap-8 justify-evenly">
        <div className="text-black w-60 h-60 flex-col justify-center items-center border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
         <div  className="justify-center items-center flex m-2"><img src={tutorial}/></div>
         <div className="text-2xl justify-center items-center flex m-4 font-semibold ">Interships</div>
         <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        <div className="text-black w-60 h-60  border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
         <div className="justify-center items-center flex m-2"><img src={tutorial}/></div>
         <div className="text-2xl justify-center items-center flex m-4 font-semibold">Jobs</div>
         <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-8">
        <div className="text-black w-60 h-60  border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
         <div  className="justify-center items-center flex m-2"><img src={tutorial}/></div>
         <div className="text-2xl justify-center items-center flex m-4 font-semibold">Courses</div>
         <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        <div className="text-black w-60 h-60  border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
         <div  className="justify-center items-center flex m-2"><img src={tutorial}/></div>
         <div className="text-2xl justify-center items-center flex m-4 font-semibold">Placement</div>
         <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        </div>

       </div>
       </div>
     </div>
    )
}
export default Services