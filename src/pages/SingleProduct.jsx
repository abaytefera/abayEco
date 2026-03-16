import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus, faArrowRight, faShieldAlt, faTruck } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (p) => {
    dispatch(addCart(p));
    toast.success("Added to your collection");
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      try {
        const response = await fetch(`https://69034865d0f10a340b237f3b.mockapi.io/product/list/List/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);

        const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
        const data2 = await response2.json();
        // Filter out current product from similar items
        setSimilarProducts(data2.filter(item => item.id !== data.id));
        setLoading2(false);
      } catch (error) {
        console.error("Failed to fetch product", error);
        setLoading(false);
      }
    };
    getProduct();
    window.scrollTo(0, 0); // Always scroll to top on product change
  }, [id]);

  const Loading = () => (
    <div className="grid md:grid-cols-2 gap-12 py-12">
      <Skeleton height={500} borderRadius={24} />
      <div className="space-y-6">
        <Skeleton width={150} height={20} />
        <Skeleton width="80%" height={40} />
        <Skeleton width={100} height={30} />
        <Skeleton count={4} />
        <div className="flex gap-4 pt-6">
          <Skeleton width={160} height={50} borderRadius={12} />
          <Skeleton width={160} height={50} borderRadius={12} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="grid md:grid-cols-2 gap-12 py-12 items-start">
      {/* Product Image Stage */}
      <div className="bg-gray-50 rounded-[2rem] p-12 flex justify-center sticky top-24">
        <img
          className="max-h-[500px] object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col h-full justify-center">
        <div className="border-b border-gray-100 pb-6 mb-6">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4 block">
            {product.category}
          </span>
          <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4">
            {product.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-yellow-400/10 px-3 py-1 rounded-full text-yellow-700 font-bold text-sm">
              <FontAwesomeIcon icon={faStar} className="text-xs" />
              {product.rating?.rate || "4.5"}
            </div>
            <span className="text-gray-400 text-sm font-medium">({product.rating?.count || "120"} reviews)</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-black text-gray-900 mb-2">
            {product.price} <small className="text-sm text-gray-400">ETB</small>
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg font-light italic">
            "{product.description}"
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <FontAwesomeIcon icon={faTruck} className="text-blue-600" />
                <span className="text-xs font-bold text-gray-700">Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600" />
                <span className="text-xs font-bold text-gray-700">Authentic Only</span>
            </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => handleAddToCart(product)}
            className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-5 rounded-2xl font-black text-sm transition-all hover:bg-blue-600 hover:-translate-y-1 shadow-xl shadow-gray-200"
          >
            <FontAwesomeIcon icon={faCartPlus} />
            ADD TO CART
          </button>
          <Link
            to="/cart"
            className="flex items-center justify-center bg-white border-2 border-gray-100 px-8 py-5 rounded-2xl font-black text-sm hover:border-gray-900 transition-all"
          >
            BUY IT NOW
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        {loading ? <Loading /> : <ShowProduct />}

        {/* Recommendation Section */}
        <div className="mt-24 pb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Similar Products</h2>
              <p className="text-gray-400 font-medium">Specially picked for your style</p>
            </div>
          </div>
          
          <Marquee gradient={false} speed={40} pauseOnHover={true} className="overflow-hidden py-4">
            {loading2 ? <Loading /> : similarProducts.map((item) => (
              <div key={item.id} className="mx-4 group">
                <Link to={`/product/${item.id}`} className="block w-[280px] bg-white border border-gray-100 rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-gray-100">
                  <div className="h-48 flex justify-center items-center mb-6 bg-gray-50 rounded-2xl p-4">
                    <img src={item.image} alt={item.title} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                  </div>
                  <h5 className="font-bold text-gray-900 line-clamp-1 mb-2">{item.title}</h5>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-blue-600">{item.price} ETB</span>
                    <span className="text-[10px] font-black text-gray-400 flex items-center gap-1">
                      VIEW <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;