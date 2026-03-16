import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faArrowLeft, faShoppingBag, faTruck, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FontAwesomeIcon icon={faShoppingBag} className="text-3xl text-gray-400" />
      </div>
      <h4 className="text-2xl font-black text-gray-900 mb-2">Your cart is empty</h4>
      <p className="text-gray-500 mb-8 max-w-sm">Looks like you haven't added anything to your collection yet.</p>
      <Link
        to="/"
        className="px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-gray-200"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Start Shopping
      </Link>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    state.forEach((item) => (subtotal += item.price * item.qty));

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Forms (Col 1-7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section: Shipping */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h2 className="text-xl font-black text-gray-900">Shipping Details</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                  <input type="text" placeholder="Abebe" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" required />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                  <input type="text" placeholder="Bikila" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Delivery Address</label>
                <input type="text" placeholder="Street name, Apartment, Suite" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" required />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">City / Region</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none transition-all focus:border-blue-500" required>
                    <option value="">Choose...</option>
                    <option>Addis Ababa</option>
                    <option>Dire Dawa</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Postal Code</label>
                  <input type="text" placeholder="1000" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none transition-all focus:border-blue-500" required />
                </div>
              </div>
            </form>
          </div>

          {/* Section: Payment */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <h2 className="text-xl font-black text-gray-900">Secure Payment</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Cardholder Name</label>
                <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-blue-500" required />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-blue-500" required />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-blue-500" required />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">CVV</label>
                  <input type="password" placeholder="***" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-blue-500" required />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary (Col 8-12) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="bg-gray-900 rounded-[2rem] p-8 text-white shadow-2xl">
            <h2 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Order Summary</h2>
            
            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 mb-8">
              {state.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <h5 className="text-sm font-bold line-clamp-1">{item.title}</h5>
                    <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                  </div>
                  <span className="font-bold text-sm">{(item.qty * item.price).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-white/10 pt-6">
              <div className="flex justify-between text-gray-400 text-sm font-medium">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} ETB</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm font-medium">
                <span>Shipping Fee</span>
                <span>{shipping.toFixed(2)} ETB</span>
              </div>
              <div className="flex justify-between text-xl font-black pt-4">
                <span>Total Amount</span>
                <span className="text-blue-400">{(subtotal + shipping).toFixed(2)} ETB</span>
              </div>
            </div>

            <button className="w-full mt-10 bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faLock} />
              Pay Securely
            </button>
            <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-tighter font-bold">
              Encrypted 256-bit SSL Connection
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Checkout</h1>
        </div>
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;