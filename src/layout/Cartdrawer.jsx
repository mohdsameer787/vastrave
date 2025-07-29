// Cartdrawer.jsx
import React, { useContext } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { BiRupee } from "react-icons/bi";
import Searchcontext from "../components/utilities/contextprovider";
import { createPortal } from "react-dom";
import UserProfile from "../components/utilities/UserProfile";

function Cartdrawer({ cartopen, togglecart }) {
  const { cart } = useContext(Searchcontext);

  return createPortal(
    <div
      className={`h-full overflow-y-scroll w-[60vw] md:w-[40vw] transform transition-transform 
      duration-200 fixed shadow-xl top-0 z-[9999] right-0
      bg-gray-50 ${cartopen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER with fixed layout */}
      <div className="sticky top-0 bg-white z-20 border-b border-gray-200">
        <div className="relative flex items-center justify-between px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800">Cart</h2>

          {/* Close button - absolutely placed */}
          <button
            onClick={togglecart}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </div>

        {/* UserProfile component */}
        <div className="px-4 pb-2">
          <UserProfile />
        </div>
      </div>

      {/* Cart items */}
      <div className="p-3">
        {cart.map((product, index) => (
          <div key={index} className="flex border-b border-gray-300 py-2">
            <img
              className="h-28 w-24 object-cover rounded"
              src={product.img.url}
              alt="productimg"
            />
            <div className="ml-3 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs mt-1 text-gray-500">
                  Size: {Object.values(product.size).join(", ")} | Color: {product.color}
                </p>
              </div>

              <div className="flex items-center gap-1 mt-2">
                <button className="border border-gray-500 h-5 w-5 flex items-center justify-center text-xs hover:border-black">
                  +
                </button>
                <div className="border border-gray-500 h-5 w-5 flex items-center justify-center text-xs">
                  1
                </div>
                <button className="border border-gray-500 h-5 w-5 flex items-center justify-center text-xs hover:border-black">
                  -
                </button>
              </div>

              <div className="flex items-center mt-2">
                <BiRupee className="h-4 w-4" />
                <p className="text-sm font-medium">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex justify-center w-full bg-white pt-2 pb-2 sticky bottom-0 shadow-inner">
        {cart.length === 0 ? (
          <p className="text-sm text-gray-600">Cart is empty</p>
        ) : (
          <button className="bg-[#641c2b] hover:bg-[#4f1623] font-medium text-white rounded w-[20vh] h-8 transition">
            Buy Now
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}

export default Cartdrawer;
