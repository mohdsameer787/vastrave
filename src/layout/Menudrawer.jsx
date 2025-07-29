import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineUser,
  HiMiniXMark,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineSquares2X2
} from "react-icons/hi2";
import { createPortal } from "react-dom";
import Searchcontext from "../components/utilities/contextprovider";

function Menudrawer({ hamburger, toggleburger }) {
  const { currentuser } = useContext(Searchcontext);
  const location = useLocation();

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300 ${
          hamburger ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleburger}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[70vw] md:w-[40vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 rounded-r-2xl ${
          hamburger ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col p-6">
          {/* Close Button */}
          <HiMiniXMark
            onClick={toggleburger}
            className="absolute top-4 right-4 h-8 w-8 text-gray-700 hover:text-black cursor-pointer"
          />

          {/* User Section */}
          <div className="flex flex-col items-center mt-8">
            {currentuser ? (
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#641c2b] text-white text-lg font-bold">
                {currentuser.name?.charAt(0).toUpperCase()}
              </div>
            ) : (
              <Link to="/signup" onClick={toggleburger}>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-gray-300 mb-2">
                    <HiOutlineUser className="h-10 w-10 text-gray-600" />
                  </div>
                  <button className="w-28 bg-[#641c2b] hover:bg-[#4f1623] text-white text-sm font-semibold py-2 px-4 rounded-lg transition">
                    Sign Up
                  </button>
                </div>
              </Link>
            )}
          </div>

          {/* Menu Links */}
          <nav className="mt-10">
            <ul className="flex flex-col gap-6 text-gray-700 font-semibold text-lg">
              <li>
                <Link
                  to="/"
                  className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 ${
                    location.pathname === "/" ? "text-[#641c2b]" : ""
                  }`}
                  onClick={toggleburger}
                >
                  <HiOutlineHome className="h-6 w-6" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/productlisting/all"
                  className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 ${
                    location.pathname.includes("productlisting") ? "text-[#641c2b]" : ""
                  }`}
                  onClick={toggleburger}
                >
                  <HiOutlineSquares2X2 className="h-6 w-6" />
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 ${
                    location.pathname === "/contact" ? "text-[#641c2b]" : ""
                  }`}
                  onClick={toggleburger}
                >
                  <HiOutlinePhone className="h-6 w-6" />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>,
    document.body
  );
}

export default Menudrawer;
