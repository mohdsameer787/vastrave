import React from 'react'
import { Link } from 'react-router-dom'

function Dressholder({dressing,categotrie,type}) {
  return (
    <Link to={`productlisting/${categotrie}`}>
    <div className='flex flex-col items-center justify-center relative '>

        <img className='w-[304px] mt-10  md:w-[41vw] sm:w-[43vw] h-[415px]  sm:h-[70vh]' src={dressing} alt="dressimg" />
        <div className='flex flex-col  gap-0 absolute bg-white h-12 w-30 sm:h-16 sm:w-43 left-6  bottom-8 '>
        <p className=' text-xs sm:text-lg  pl-1 upeer font-medium '>{type}</p>
       
        <button className=" hover:font-bold border-b ml-1 text-xs sm:text-lg   cursor-pointer sm:w-23 pb-1 w-14 h-6">shop now</button>
    </div>
    </div></Link>
  )
}

export default Dressholder