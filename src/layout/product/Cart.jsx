import React from 'react'
import { Link } from 'react-router-dom'

function Cart({product}) {
    console.log(product)
  return (
    <Link to={`/product/${product.id}`}>
              {" "}
              {/* Wrap with Link */}
              <img
                src={product.img.url}
                alt={product.name}
                className="w-full   object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm mb-1 capitalize">
                  | {product.categories2}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold text-pink-600">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-600 text-sm">{product.color}</span>
                </div>
              </div>
            </Link>
  )
}

export default Cart