import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const EmptyCart = () => (
    <div className="text-center py-16">
      <h4 className="text-3xl font-semibold mb-4">Your Cart is Empty</h4>
      <Link
        to="/product"
        className="inline-flex items-center px-6 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"
      >
        <i className="fa fa-arrow-left mr-2"></i> Continue Shopping
      </Link>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold border-b pb-2">Item List</h2>
            {state.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />
                <div className="flex-1 w-full">
                  <h4 className="text-md font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} x {item.qty}
                  </p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => removeItem(item)}
                      className="px-3 py-1 border rounded hover:bg-gray-200"
                    >
                     <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => addItem(item)}
                      className="px-3 py-1 border rounded hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Products ({totalItems})</span>
                <span>${Math.round(subtotal)}</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping}</span>
              </li>
              <li className="flex justify-between font-bold text-base border-t pt-3">
                <span>Total</span>
                <span>${Math.round(subtotal + shipping)}</span>
              </li>
            </ul>
            <Link
              to="/checkout"
              className="mt-6 block w-full bg-gray-800 text-white text-center py-2 rounded hover:bg-black transition"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Cart</h1>
        <hr className="mb-8 border-gray-300" />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
