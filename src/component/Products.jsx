import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://69034865d0f10a340b237f3b.mockapi.io/product/list/List");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <Skeleton height={592} />
        </div>
      ))}
    </div>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="flex flex-wrap justify-center gap-3 py-5">
        {[
          { label: "All", action: () => setFilter(data) },
          { label: "Men's Clothing", action: () => filterProduct("men's clothing") },
          { label: "Women's Clothing", action: () => filterProduct("women's clothing") },
          { label: "Jewelery", action: () => filterProduct("jewelery") },
          { label: "Electronics", action: () => filterProduct("electronics") },
        ].map(({ label, action }, index) => (
          <button
            key={index}
            onClick={action}
            className="px-4 py-1 border border-gray-700 rounded hover:bg-gray-800 hover:text-white transition text-sm"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filter.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-60 object-contain mb-4 mx-auto"
            />
            <h5 className="text-lg font-semibold mb-2 truncate">
              {product.title.substring(0, 20)}...
            </h5>
            <p className="text-gray-600 text-sm mb-3">
              {product.description.substring(0, 90)}...
            </p>
            <p className="text-lg font-bold text-green-600 mb-3">
              {product.price}Birr
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
              <Link
                to={`/product/${product.id}`}
                className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-black transition"
              >
                Buy Now
              </Link>
              <button
                onClick={() => {
                  toast.success("Added to cart");
                  addProduct(product);
                }}
                className="flex-1 px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Latest Products</h2>
      <div className="h-[2px] bg-gray-300 w-24 mx-auto mb-8" />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
