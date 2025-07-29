import React from 'react'
import Cart from './Cart'

function newcart() {
  return (
  
    ({product})=>{
return(
    <>
    <label className='absolute mt-3 pl-0.25 text-white pr-0.5 bg-[#4f1515]'>New</label>
    <Cart product={product}></Cart>
    </>
)

   }
  )
}

export default newcart


   