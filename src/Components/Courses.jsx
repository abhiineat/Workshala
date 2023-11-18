import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import coursesLady from "../assets/cousesLady.png";
import arrow from "../assets/arrow.svg";
import CategoriesCard from './CategoriesCard';
import CoursesCard from './CoursesCard';
import arrowMore from "../assets/arrowMore.svg";
import { Link } from 'react-router-dom';
function Courses() {
  const titleArray = ["UI/UX Designing","UI/UX Designing", "Web Development" ,"Robotics", "Robotics"];
  const iterations = Array.from({ length: 6 }, (_, index) => index);
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap justify-between'>
    <div>
      <h1 className="font-bold text-3xl my-2 mb-9 ml-[3rem] mt-[2rem] "> Learn on Your{" "}<span className="text-[#FF5E6E]">Sche</span>dule
      </h1>
      <div className=' font-normal text-base ml-[3rem] mt-[1.5rem]'>Study any topic, anytime explore thousands of courses</div>
      <div className=' font-normal text-base ml-[3rem]'>for the lowest price ever!</div>
      <input
        className="text-xs h-[35px] px-10 py-4 w-4/5 ml-[3rem] bg-[#FFFCFC] rounded-2xl shadow-lg mt-6 focus:border-none focus:outline-none"
        type="text"
        // value={search}
        // onChange={searchHandler}
         placeholder="What do you want to learn?"
      />
      <div className='flex'>
      <button
        // onClick={loadCourses}
        className="rounded-2xl px-12 py-[10px] mt-7 bg-[#FF5E6E] text-xs text-white shadow-lg hover:bg-rose-500 w-2/6 ml-[3rem]">
        Search
      </button>
      <img src={arrow} className='ml-2 mt-8' style={{height:"2" }}/>
      </div>
    </div>
    <img src={coursesLady} alt="Star" style={{ width: "55%" }} />
    </div>
    <div className='font-WorkSans flex font-semibold text-[1.4rem] mt-[3rem] ml-[3.2rem]'>
      Courses Categories
    </div >
    <div className="flex justify-evenly w-full flex-wrap">
        {titleArray.map((item,index) => (
        <CategoriesCard name={item} key={index} />
      ))}
    </div>
    <div className='flex justify-between'>
    <div className='font-WorkSans flex font-semibold text-[1.4rem] mt-[3rem] ml-[3.2rem]'>
      Courses for you
    </div >
    <Link to='/courses2'>
    <button>
    <img src={arrowMore} className='mr-[6rem] mt-[2.5rem]'/>
    </button>
    </Link>
    </div>
    <div className='flex flex-wrap justify-around mx-[2rem]'>
      {iterations.map((iteration) => (
        <CoursesCard key={iteration} />
      ))}
      
    </div>
    

    <Footer/>
    </>
  )
}

export default Courses