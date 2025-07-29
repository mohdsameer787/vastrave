import { HiMiniXMark } from "react-icons/hi2";

import { useContext, useState } from "react";
import assets from "../assets/image";
import Searchcontext from "./utilities/contextprovider";

function Searchbar({ isopen, togglehandler }) {
  const [value, setvalue] = useState("");
  const { setSearchiteam } = useContext(Searchcontext);

  const handlesbumit = (e) => {
    e.preventDefault();
    console.log("working");

    setSearchiteam(value);

    setvalue("");
  };

  return (
    <div
      className={`flex  justify-center items-center ${
        isopen
          ? " shadow-md w-full absolute right-0 h-16 z-50 transition-all duration-100 top-0  bg-white"
          : "w-auto"
      }`}
    >
      {isopen ? (
        <>
          <form onSubmit={handlesbumit} className=" w-[70vw] md:w-1/2 text-sm ">
            <div className="w-full flex align-middle items-center  bg-gray-200 rounded-4xl h-6">
              <input
                placeholder="search"
                value={value}
                onChange={(e) => setvalue(e.target.value)}
                className="pr-3 pb-3 pl-4 pt-2 h-6 w-full focus:outline-none  bg-gray-200 rounded-4xl"
                type="text"
              />
              <button type="submit">
                <img
                  className="p-2 cursor-pointer "
                  src={assets.searchicon}
                  alt="search"
                />
              </button>
            </div>
          </form>

          <HiMiniXMark
            onClick={togglehandler}
            className="h-7 w-7 cursor-pointer absolute right-5"
          />
        </>
      ) : (
        <img
          onClick={togglehandler}
          className="p-2 cursor-pointer "
          src={assets.searchicon}
          alt="search"
        />
      )}
    </div>
  );
}

export default Searchbar;
