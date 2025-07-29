import React, { useContext } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { BiRupee } from "react-icons/bi";
import Searchcontext from "../components/utilities/contextprovider";
import { createPortal } from "react-dom";

function Cartdrawer({ cartopen, togglecart }) {
  const { cart } = useContext(Searchcontext);
  return createPortal(
    <div
      className={`h-full  overflow-y-scroll  w-[60vw] md:w-[40vw] transform transition-transform 
 duration-200 fixed  shadow-xl top-0  z-[9999] right-0
  bg-gray-50 ${cartopen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="sticky h-15  bg-white top-0">
        <button>
          <HiMiniXMark
            onClick={togglecart}
            className="h-7 w-7 right-0 cursor-pointer z-50 absolute top-2"
          />
        </button>

        <h2 className="pl-3 font-medium">Cart</h2>
      </div>
      <div>
        {cart.map((product, index) => (
          <div className="z-50" key={index}>
            <div className="flex border-b border-gray-300 ">
              <img
                className="h-33 w-25 p-2"
                src={product.img.url}
                alt="productimg"
              />
              <div className="flex flex-col ">
                <p className="text-sm font-medium">{product.name} </p>
                <p className="text-xs mt-2 text-gray-500  ">{`size:${product.size}  color:${product.color}`}</p>

                <div className="flex mt-2 gap-1">
                  <button className=" border cursor-pointer hover:border-black hover:border-2 hover:text-black  border-gray-500 pb-1 flex items-center justify-center h-4 w-4">
                    +
                  </button>
                  <div className="border cursor-pointer hover:border-black hover:border-2 hover:text-black  border-gray-500 text-xs flex items-center justify-center h-4 w-4">
                    1
                  </div>
                  <button className="border cursor-pointer hover:border-black hover:border-2 hover:text-black  border-gray-500 pb-1 flex items-center justify-center h-4 w-4">
                    -
                  </button>
                </div>
                <div className=" mt-3 justify-baseline flex flex-row">
                  <p className="font-medium ">{product.price}</p>
                  <BiRupee className=" h-6 w-4 "></BiRupee>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full  bg-white pt-2  pb-1 sticky bottom-0">
        {cart.length === 0 ? (
          <p>cart is empty </p>
        ) : (
          <button className="bg-black font-medium cursor-pointer rounded text-white w-[20vh] h-8">
            {" "}
            buy now
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}

export default Cartdrawer;
