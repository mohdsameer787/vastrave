import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../../assets/apidata";
import { useParams } from "react-router-dom";
import Searchcontext from "../../components/utilities/contextprovider";
import Cart from "./Cart";
import newcart from "./newcart";

const ProductListing = () => {
  const Newproduct=newcart()
  const [newlist, setNewlist] = useState([]);
  const { searchiteam } = useContext(Searchcontext);
  const { categorie } = useParams();
  window.scrollTo({ top: 0 });

  useEffect(() => {
    let data = products;

    if (categorie) {
      data = data.filter((product) => product.categories2 == categorie||product.categories==categorie||categorie=="all"||(categorie=="new"&&product.new==true));
    }
   

    if (searchiteam) {
      console.log(searchiteam);
      data = data.filter((product) =>
        product.name.toLowerCase().includes(searchiteam.toLowerCase())
      );
      setNewlist(data);
    }

    setNewlist(data);
  }, [categorie, searchiteam]);

  return (
    <div className="bg-white min-h-screen px-12 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Explore Our {categorie} Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newlist.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl  h-auto overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            {product.new?(<Newproduct product={product}></Newproduct>):(<Cart product={product}></Cart>)}

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
