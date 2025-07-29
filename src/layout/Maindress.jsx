import React from 'react'
import Dressholder from './Dressholder'
import assets from '../assets/image'

function Maindress() {
  const categotrie1="traditional"
   const categotrie2="westren"
  const traditional="Traditional dresses"
  const western = "Westen dresses";
  return (<>
  <div className='flex flex-col justify-center p-3 items-center gap-10 sm:gap-18 sm:flex-row'>
  <Dressholder  dressing={assets.traditional} categotrie={categotrie1} type={traditional}></Dressholder>
   <Dressholder  dressing={assets.westren} categotrie={categotrie2}  type={western}></Dressholder>
  </div>
</>  )
}

export default Maindress