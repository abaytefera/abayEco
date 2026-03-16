import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success(`${product.title.substring(0, 15)}... added to cart`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
  };

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://69034865d0f10a340b237f3b.mockapi.io/product/list/List");
      const products = await response.json();
      if (componentMounted) {
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };
    getProducts();
    return () => { componentMounted = false; };
  }, []);

  const filterProduct = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat.toLowerCase());
      setFilter(updatedList);
    }
  };

  const Loading = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-4 bg-white rounded-2xl">
          <Skeleton height={250} borderRadius={16} />
          <Skeleton count={2} className="mt-4" />
          <Skeleton width={80} height={24} className="mt-2" />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <>
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {["All", "Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"].map((cat) => (
          <button
            key={cat}
            onClick={() => filterProduct(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
              activeCategory === cat 
              ? "bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-200" 
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filter.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-100 rounded-3xl p-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 h-64 flex items-center justify-center p-6 mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              />
              {/* Floating Quick Action */}
              <button 
                onClick={() => addProduct(product)}
                className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-900 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gray-900 hover:text-white"
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow">
              <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mb-1">
                {product.category}
              </span>
              <h5 className="text-gray-900 font-bold text-lg leading-tight mb-2 line-clamp-1">
                {product.title}
              </h5>
              <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                <span className="text-xl font-black text-gray-900">
                  {product.price}<small className="text-xs ml-1 font-bold">ETB</small>
                </span>
                <Link
                  to={`/product/${product.id}`}
                  className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-900 transition flex items-center gap-2"
                >
                  Details <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="py-16 px-6 container mx-auto">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Our Collection</h2>
        <p className="text-gray-500">
          Discover handpicked premium items curated just for your lifestyle.
        </p>
      </div>
      
      {loading ? <Loading /> : <ShowProducts />}
    </section>
  );
};

export default Products;