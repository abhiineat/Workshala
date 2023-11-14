import React from 'react'
import login from '../assets/login.svg'
export default function LoginPage() {
  return (
    <>
    <div className='flex flex-wrap flex-row max-[1024px]:justify-center' >
      <img className=' h-[90vh] ml-[5vw] mt-[2vh] max-[640px]:ml-0 max-[640px]:h-[30rem] max-[420px]:mt-0 max-[420px]:h-[20rem]' src={login}/>
      <div className="mt-[10vh] ml-[5vw] flex flex-wrap flex-col max-[420px]:mt-0  max-[420px]:pt-0 max-[640px]:m-0 ">
        <div className="loginHead font-WorkSans font-medium text-[3.5rem] max-[640px]:text-[9vw] max-[420px]:text-[12vw] ">Login</div>
        <div className="mt-[9vh] flex flex-wrap flex-col ">
          <div className=" font-WorkSans font-medium text-base flex">Email</div>
          <form>
          <div className="flex">
            
            <input type="email" required name="email" className="border border-black rounded-md font-WorkSans text-base w-[20rem] h-[3rem] pl-4 max-[640px]:w-[50vw]  max-[420px]:w-[70vw] " placeholder='Enter your email' />
          </div>
          <div className="mt-2 font-WorkSans font-medium flex text-base">Password</div>
          <div className="flex">
            <input type="password" required name="password" className="border border-black rounded-md font-WorkSans text-base w-[20rem] h-[3rem] pl-4 max-[640px]:w-[50vw]  max-[420px]:w-[70vw] " placeholder='Enter your Password' />
          </div>
          <div className="flex  flex-row mt-[1vh] max-[640px]:w-[50vw] ">
            <div className="">
              <input type="checkbox" className='' name='rememberMe' />
              
            </div>
            <div className='font-WorkSans font-medium text-sm mt-0.5 ml-0.5'>Remember Me</div>
            <div className='ml-[25%] font-WorkSans font-medium text-sm  mt-0.5 max-[640px]:ml-[12vw]'>Forgot password?</div>
          </div>
         <div>
            <button className='font-WorkSans font-medium text-sm text-white w-[20rem] rounded-md h-[2.5rem] mt-5 bg-[#946CC3] max-[640px]:w-[50vw] max-[420px]:w-[70vw]'>Sign in</button>
         </div>
         
         </form>
         <div className='mt-[2vh] ml-[1rem] font-WorkSans font-medium max-[640px]:w-[50vw] '>Haven't Registered Yet <button className='text-[#946CC3]'> Register Now</button></div>
        </div>

      </div>
    </div>
    </>
  )
}
