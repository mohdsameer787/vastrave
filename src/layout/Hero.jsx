import React from 'react'
import { Link } from 'react-router-dom';
import assets from "../assets/image";
function Hero() {
  return (
   
    <section className="flex flex-col w-full md:w-full h-[44vh] sm:h-[63vh] md:h-[70vh] items-center justify-center">
      <div className=" absolute z-10   flex flex-col justify-center items-center">
        <p className="text-3xl z-10  uppercase sm:text-5xl font-bold text-shadow-gray-600  text-white text-shadow-lg">
          {" "}
          Summer Collection
        </p>
        <p className="text-white mt-1">explore the fasion and get your style</p>
        <Link to={`productlisting/new`}>
        <button className="text-white cursor-pointer border border-white rounded h-7 mt-8 font-medium pb-1 w-17">Explore</button>
      </Link>
      </div>
      <img
        className="w-full  h-[44vh] sm:h-[63vh] md:h-[70vh]"
        src={assets.bkpanal}
        alt="backpanal"
      />
      <div
        className="bg-[#0a0a0a] opacity-10 absolute w-full md:w-full h-[42vh] sm:h-[62vh] md:h-[410px]
   "
      ></div>
    </section>
  );
}

export default Hero