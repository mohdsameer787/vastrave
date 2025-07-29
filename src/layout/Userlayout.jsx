import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Searchprovider from "../components/utilities/searchcontext";

function Userlayout() {
  return (
    <>
      <Searchprovider>
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </Searchprovider>
    </>
  );
}

export default Userlayout;
