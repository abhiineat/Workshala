import React from 'react'
import ResetImg from '../../assets/Reset.svg'
function Reset() {
  return (
    <>
      < div className='flex flex-wrap flex-row max-[1156px]:justify-center ' >
      <img className=' h-[90vh] ml-[5vw] mt-[3vh] max-[500px]:h-[50vh] max-[500px]:p-1' src={ResetImg}/>
      <div className='flex flex-wrap flex-col mt-[4rem]'>
        <div className='font-WorkSans font-semibold text-[3.5rem] mt-[4rem] ml-[3.5rem] max-[1156px]:mt-0 max-[640px]:text-[8vw] max-[500px]:ml-8 '>Reset Password</div>
        <div className='flex flex-wrap flex-col '>
            <form >
            <div className='flex flex-wrap flex-col'>
            <div className=" flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-[3.5rem] mb-0  max-[500px]:ml-8">New Password</div>
            <input type="password" required name="password" className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8  " placeholder='Enter Your New Password' />
            
            <div className="flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 max-[500px]:ml-8">Confirm Password</div>
            <input type="password" required name="password" className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Re-write Your New Password' />
            <div className=" font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 flex flex-wrap max-[500px]:ml-8">OTP</div>
            <input type="password" required name="password" className="border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Enter Your OTP' />
            </div>
            <div>
            <button className='font-WorkSans font-medium text-sm text-white w-[26rem] rounded-md h-[2.5rem] mt-6 bg-[#946CC3] ml-[3.5rem] max-[640px]:w-[65vw] max-[500px]:ml-8'>Sign in</button>
            </div>
            </form>

        </div>

      </div>
      </div>
    </>
  )
}

export default Reset
