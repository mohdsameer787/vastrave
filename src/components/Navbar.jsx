import React, { useContext, useState } from "react";
import Searchbar from "./searchbar";
import assets from "../assets/image";
import Cartdrawer from "../layout/cartdrawer";
import Menudrawer from "../layout/Menudrawer";
import {
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import Searchcontext from "./utilities/contextprovider";

function Navbar() {
  const [underline, setunderline] = useState("");
  const [isopen, setisopen] = useState(false);

  const [cartopen, setcartopen] = useState(false);
  const [hamburger, sethamburger] = useState(false);
  const { currentuser,cart } = useContext(Searchcontext);

  const togglehandler = () => {
    setisopen(!isopen);
  };
  const togglecart = () => {
    setcartopen(!cartopen);
  };
  const toggleburger = () => {
    sethamburger(!hamburger);
  };

  return (
    <div
      className={
        "flex z-50  h-13 pl-5 pt-3 sticky top-0 bg-white shadow-md pr-3 align-middle pb-2 border-b border-gray-200 justify-between"
      }
    >
      <div className="flex item-center gap-0">
        <img className="h-7 " src={assets.logo} alt="logo" />
        <img className="h-7  " src={assets.text} alt="text" />
      </div>
      <ul className="font-sans  items-center font-bold gap-5 text-gray-600 text-sm sm:flex hidden ">
        <li
          onClick={() => setunderline("home")}
          className={
            underline == "home"
              ? "border-b-2 hover:text-gray-900 cursor-pointer "
              : " hover:text-gray-900 cursor-pointer md:block hidden "
          }
        >
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li
          onClick={() => setunderline("menu")}
          className={
            underline == "menu"
              ? "border-b-2 hover:text-gray-900 cursor-pointer "
              : " hover:text-gray-900 cursor-pointer "
          }
        >
          <Link to={`productlisting/${"all"}`}>collection</Link>
        </li>
        <li
          onClick={() => setunderline("mobile-app")}
          className={
            underline == "mobile-app"
              ? "border-b-2 hover:text-gray-900 cursor-pointer "
              : " hover:text-gray-900 cursor-pointer "
          }
        >
          mobile-app
        </li>
        <li
          onClick={() => setunderline("contact")}
          className={
            underline == "contact"
              ? "border-b-2 hover:text-gray-900 cursor-pointer "
              : " hover:text-gray-900 cursor-pointer "
          }
        >
          contact
        </li>
      </ul>
      <div className="flex gap-2">
        <Searchbar togglehandler={togglehandler} isopen={isopen}></Searchbar>

        <HiOutlineShoppingBag
          onClick={togglecart}
          className="h-6 w-6 mt-1 cursor-pointer"
        />
        {cart.length==0?(<div></div>):(<div className="bg-red-600 flex items-center md:right-11 align-middle right-12 pb-0.5 text-gray-100 justify-center p-0.5 absolute  text-[8px] rounded-full h-3 w-3">
          {cart.length}
        </div>)}
        
        <HiBars3BottomRight
          onClick={toggleburger}
          className="h-6 flex md:hidden  w-6 mt-1.5 cursor-pointer"
        ></HiBars3BottomRight>

        {currentuser ? (
          <Link to={"/userprofile"}>
          <div className="h-7 w-7 hidden sm:flex items-center justify-center rounded-full bg-gray-700 text-white cursor-pointer">
            {currentuser.name?.charAt(0).toUpperCase()}
          </div></Link>
        ) : (
          <Link to="/signup">
            <HiOutlineUser className="h-6 mt-1 w-7 hidden sm:flex cursor-pointer" />
          </Link>
        )}
      </div>

      <Menudrawer
        hamburger={hamburger}
        toggleburger={toggleburger}
      ></Menudrawer>

      <Cartdrawer cartopen={cartopen} togglecart={togglecart}></Cartdrawer>
    </div>
  );
}

export default Navbar;
