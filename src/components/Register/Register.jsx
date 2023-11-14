import React, { useState } from 'react'
import registerImg from '../../assets/register.svg'
import axios from 'axios';

function Register() {
   const data={
    name: "",
    number: "",
    email: "" ,
    password: ""
     }
    const [inputData, setInputData] = useState('data');
  
    const handleChange = (event) => {
      setInputData({...inputData, [event.target.name]:event.target.value});
    };
  
    const handleSubmit = (event) => {
     event.preventDefault();
     axios.post("http://workshala.onrender.com/signUp",inputData)
     .then((response)=>{
      console.log(response)
     })

    };
  return (
    <>
        < div className='flex flex-wrap flex-row max-[1156px]:justify-center ' >
      <img className=' h-[90vh] ml-[5vw] mt-[3vh] max-[500px]:h-[50vh] max-[500px]:p-1' src={registerImg}/>
      <div className='flex flex-wrap flex-col mt-[4rem]'>
        <div className='font-WorkSans font-semibold text-[3.5rem] mt-[1.5rem] ml-[3.5rem] max-[1156px]:mt-0 max-[640px]:text-[8vw] max-[500px]:ml-8 '>Register</div>
        <div className='flex flex-wrap flex-col '>
            <form >
            <div className='flex flex-wrap flex-col'>
            <div className=" flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-[3.5rem] mb-0  max-[500px]:ml-8">Name</div>
            <input type="text" onChange={handleChange} required name="name" value={inputData.name} className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8  " placeholder='Enter Your Name' />
            
            <div className="flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 max-[500px]:ml-8">Phone Number</div>
            <input type="number"  onChange={handleChange}  required name="number" value={inputData.number} className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Enter Your Phone Number' />
           
            <div className="flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 max-[500px]:ml-8">Email</div>
            <input type="email"  onChange={handleChange}  required name="email" value={inputData.email} className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Enter Your Email' />
            <div className=" font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 flex flex-wrap max-[500px]:ml-8">Password</div>
            <input type="password" required onChange={handleChange} value={inputData.password} name="password" className="border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Enter Your Password' />
            </div>
            <div>
            <button onClick={handleSubmit} className='font-WorkSans font-medium text-sm text-white w-[26rem] rounded-md h-[2.5rem] mt-6 bg-[#946CC3] ml-[3.5rem] max-[640px]:w-[65vw] max-[500px]:ml-8'>Sign up</button>
            </div>
            </form>
            <div className='ml-[10rem] mt-[1rem] font-WorkSans font-medium max-[640px]:ml-[25vw]  max-[500px]:ml-[15vw]  max-[500px]:w-[57vw] '>Already Registered ! <button className='text-[#946CC3]'> Login</button></div>

        </div>

      </div>
      </div>
      
    </>
  )
}

export default Register
