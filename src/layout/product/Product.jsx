import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import products from "../../assets/apidata";
import Productpage from "./Productpage"
import Searchcontext from "../../components/utilities/contextprovider";


function Product() {

  const [adding,setAdding]=useState(false)
const {setCart,currentuser}=useContext(Searchcontext)
  const id = useParams();
  const data = products.find((p) => p.id === parseInt(id.id));

    const [img, setimg] = useState(data.img.url);
    const [active,setActive]=useState("img1");
    const navigate=useNavigate()

const addtocart=()=>{
  if(!currentuser){
navigate("/signup")
  }
  setAdding(true)
  setTimeout(() => {
    setCart((prev=>[...prev,data]))
    setAdding(false)
  }, 1000);


}

  useEffect(()=>{

    setActive("img1")
setimg(data.img.url)
window.scrollTo({ top: 0  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])


  return (
    <>
      <div className="flex flex-col md:flex-row sm:flex-row gap-0 md:pl-10 sm:gap-5 w-full sm:w-auto justify-center">
        <div className="mt-6 relative hide-horizontal-scrollbar overflow-x-scroll p-2 flex flex-row sm:flex-col w-full sm:w-auto gap-2">
          <img
            onClick={() =>{ setimg(data.img.url)
                            setActive("img1")
            }}
            className={`cursor-pointer  rounded-lg h-full w-full  ${active==="img1"?"sm:h-40 sm:w-30":"sm:h-35 sm:w-25"} `}
            src={data.img.url}
            alt="working"
          />
          <img
            onClick={() => {setimg(data.img.url2)
               setActive("img2")
            }}
            className={`cursor-pointer  rounded-lg h-full w-full  ${active==="img2"?"sm:h-40 sm:w-30":"sm:h-35 sm:w-25"} `}
            src={data.img.url2}
            alt="working"
          />
            <img
            onClick={() => {
              setimg(data.img.url3)
               setActive("img3")

            }}
            className={`cursor-pointer  rounded-lg h-full w-full  ${active==="img3"?"sm:h-40 sm:w-30":"sm:h-35 sm:w-25"} `}
            src={data.img.url3}
            alt="working"
          />
        </div>
        <div className=" flex  md:flex-row flex-col ">
          <div className=" hidden sm:flex  h-[21vh] sm:h-[600px]  p-3 mt-2">
            <img
              className=" rounded-lg h-full w-full"
              src={img}
              alt="working"
            />
          </div>
          <div className=" sm:w-60 w-full sm:mt-4 p-3 pt-1 sm:p-3 mt-4 ">
            <h1 className="text-4xl">{data.name}</h1>
            <div className="flex flex-row">
              <span className="text-2xl">{data.price}</span>
              <BiRupee className=" h-8 w-6 "></BiRupee>
            </div>

            <p className="text-[1rem]">{data.description}</p>

<div>
  <p>size : </p>
 
</div>

  <button   onClick={addtocart}
              disabled={adding}
              className={`mt-2 ${adding?"bg-pink-700":" bg-pink-600 "} text-white px-6 py-2  rounded-full hover:bg-pink-700 transition`}
            >
           {adding?"Adding...":"Add to cart"}
            </button>

            {/* Delivery & Return Info */}
            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <p>🚚 Free Delivery within 4-6 days</p>
              <p>🔁 7 Days easy return available</p>
              <p>🛡️ 100% Original Products</p>
            </div>

          </div>
        </div>
      </div>
    <Productpage></Productpage>
    </>
  );
}

export default Product;
