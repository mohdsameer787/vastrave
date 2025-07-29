import React, { useRef } from "react";
import imglist from "../assets/dress";

import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Categories() {
  const scrollref = useRef(null);
  const scrolleft = () => {
    const container = scrollref.current;
  

    if (container.scrollLeft === 0) {
      console.log("its already at the start  ");
    } else {
      container.scrollLeft = container.scrollLeft -container.offsetWidth;
    }
  }

   const scrollright = () => {
    const container = scrollref.current;
    console.log(container);
    console.log(container.scrollLeft);

    if (container.scrollLeft === container.scrollWidth) {
      console.log("its already at the end ");
    } else {
      container.scrollLeft = container.scrollLeft + container.offsetWidth;
    }
  }

  return (
    <div className="w-[100vw] relative h-120">
    
      <div className="flex flex-col m-2 items-center justify-center">
 <p className="font-bold mt-4 text-xl">Categories</p>
     <p className="mb-10 sm:mb-1">  explore the whole new era with stunnig categories</p>
      </div>

      <button
        onClick={scrolleft}
        className="absolute  shadow-lg right-13 z-20 top-15 sm:top-7 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 m-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button onClick={scrollright} className="absolute shadow-lg top-15 sm:top-7 right-3 z-20 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 m-2 rounded-full">
        <FaChevronRight />
      </button>
     
       
    <div
      ref={scrollref}
      className=" hide-horizontal-scrollbar w-full scroll-smooth  flex rela  h-100 items-center  overflow-auto  overflow-x-scroll sm:mx-auto sm:space-x-6 bg-white"
    >
     
      
      {imglist.map((product, index) => (
  <div key={index}  className="relative flex  tems-center justify-center rounded-lg min-w-[100vw] h-100 sm:h-100 sm:min-w-[50vw]  md:min-w-[30vw] ">
         <Link to={`productlisting/${product.name}`}> <img className="  rounded-lg  min-w-[85vw] h-100 sm:h-100 sm:min-w-[50vw]  md:min-w-[30vw]  " src={product.url} alt="dressimg" />
            
          <div className="backdrop-blur-md rounded-b-lg opacity-90 pl-2 h-17 w-[85vw] sm:w-full absolute bottom-0">
            <p className="text-xl text-shadow-md text-shadow-gray-500 text-white">{product.name}</p>
          </div></Link> 
       </div> 
      ))}
    </div>
    </div>
  );
}

export default Categories;
