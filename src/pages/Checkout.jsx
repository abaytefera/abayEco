import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => (
    <div className="flex items-center justify-center py-10">
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h4 className="text-2xl font-semibold mb-4">No item in Cart</h4>
        <Link
          to="/"
          className="inline-block px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded transition"
        >
          <i className="fa fa-arrow-left mr-2"></i>Continue Shopping
        </Link>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => (subtotal += item.price * item.qty));
    state.forEach((item) => (totalItems += item.qty));

    return (
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Products ({totalItems})</span>
                <span>${Math.round(subtotal)}</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping}</span>
              </li>
              <li className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>${Math.round(subtotal + shipping)}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Billing Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Billing Address</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 font-medium">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 font-medium">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded px-4 py-2"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block mb-1 font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border rounded px-4 py-2"
                  placeholder="1234 Main St"
                  required
                />
              </div>

              <div>
                <label htmlFor="address2" className="block mb-1 font-medium">
                  Address 2 <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="address2"
                  className="w-full border rounded px-4 py-2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="country" className="block mb-1 font-medium">
                    Country
                  </label>
                  <select id="country" className="w-full border rounded px-4 py-2" required>
                    <option value="">Choose...</option>
                    <option>Ethiopia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="state" className="block mb-1 font-medium">
                    State
                  </label>
                  <select id="state" className="w-full border rounded px-4 py-2" required>
                    <option value="">Choose...</option>
                    <option>Addis Abeba</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="zip" className="block mb-1 font-medium">
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">Payment</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cc-name" className="block mb-1 font-medium">
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="cc-name"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cc-number" className="block mb-1 font-medium">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    id="cc-number"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="cc-expiration" className="block mb-1 font-medium">
                    Expiration
                  </label>
                  <input
                    type="text"
                    id="cc-expiration"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cc-cvv" className="block mb-1 font-medium">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cc-cvv"
                    className="w-full border rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>
        <hr className="mb-6" />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;