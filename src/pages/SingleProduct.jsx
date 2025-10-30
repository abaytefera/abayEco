import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://69034865d0f10a340b237f3b.mockapi.io/product/list/List/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="flex flex-col md:flex-row gap-8 my-10">
      <Skeleton height={400} width={400} />
      <div className="flex-1 space-y-4">
        <Skeleton height={30} width={250} />
        <Skeleton height={90} />
        <Skeleton height={40} width={70} />
        <Skeleton height={50} width={110} />
        <Skeleton height={120} />
        <div className="flex gap-4">
          <Skeleton height={40} width={110} />
          <Skeleton height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="flex flex-col md:flex-row gap-8 my-10">
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          className="max-w-xs md:max-w-md object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-sm uppercase text-gray-500">{product.category}</p>
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-lg text-yellow-600">
          {product.rating && product.rating.rate} <i className="fa fa-star" />
        </p>
        <p className="text-2xl font-bold text-green-600">{product.price}Birr</p>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => addProduct(product)}
            className="px-6 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition rounded"
          >
            Add to Cart
          </button>
          <Link
            to="/cart"
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-black transition"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="flex gap-4 my-6">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} height={400} width={250} />
      ))}
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="flex gap-6 my-6">
      {similarProducts.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-4 w-[250px] flex flex-col justify-between"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-60 object-contain mb-4"
          />
          <h5 className="text-sm font-semibold mb-2 truncate">
            {item.title.substring(0, 40)}...
          </h5>
          <div className="flex flex-col gap-2 mt-auto">
            <Link
              to={`/product/${item.id}`}
              className="bg-gray-800 text-white text-center py-1 rounded hover:bg-black"
            >
              Buy Now
            </Link>
            <button
              onClick={() => addProduct(item)}
              className="border border-gray-800 text-gray-800 py-1 rounded hover:bg-gray-800 hover:text-white transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        {loading ? <Loading /> : <ShowProduct />}

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
          <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
          </Marquee>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
