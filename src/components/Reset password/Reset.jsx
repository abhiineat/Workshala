import React from 'react'
import ResetImg from '../../assets/Reset.svg'
function Reset() {
  return (
    <>
      < div className='flex flex-wrap flex-row max-[1024px]:justify-center' >
      <img className=' h-[90vh] ml-[5vw] mt-[2vh] max-[640px]:ml-0 max-[640px]:h-[30rem] max-[420px]:mt-0 max-[420px]:h-[20rem]' src={ResetImg}/>
      </div>
    </>
  )
}

export default Reset
