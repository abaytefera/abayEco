import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faArrowLeft, faShoppingBag, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-300" />
      </div>
      <h4 className="text-2xl font-black text-gray-900 mb-2">Your shopping bag is empty</h4>
      <p className="text-gray-400 mb-8 max-w-xs">Give it some love and add some items to your collection!</p>
      <Link
        to="/product"
        className="px-8 py-3 bg-gray-900 text-white font-black text-sm rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-gray-200"
      >
        BROWSE PRODUCTS
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Item List (Col 1-8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center mb-4 px-2">
            <h2 className="text-lg font-black text-gray-900 uppercase tracking-tighter">Your Items ({totalItems})</h2>
          </div>
          
          {state.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-8 transition-all hover:shadow-xl hover:shadow-gray-100/50"
            >
              {/* Product Image Stage */}
              <div className="w-32 h-32 bg-gray-50 rounded-2xl p-4 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info & Controls */}
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h4 className="text-lg font-bold text-gray-900 line-clamp-1">{item.title}</h4>
                <p className="text-blue-600 font-black text-sm">{item.price.toFixed(2)} Birr</p>
                
                <div className="flex items-center justify-center sm:justify-start mt-4">
                  <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => removeItem(item)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
                    >
                      <FontAwesomeIcon icon={item.qty === 1 ? faTrashAlt : faMinus} className="text-xs" />
                    </button>
                    <span className="px-6 font-black text-gray-900 text-sm">{item.qty}</span>
                    <button
                      onClick={() => addItem(item)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm"
                    >
                      <FontAwesomeIcon icon={faPlus} className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Total for this item */}
              <div className="hidden sm:block text-right">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Subtotal</p>
                <p className="text-xl font-black text-gray-900">{(item.price * item.qty).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary (Col 9-12) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Order Summary</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                <span>Items Subtotal</span>
                <span className="text-gray-900 font-bold">{subtotal.toFixed(2)} Birr</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                <span>Estimated Shipping</span>
                <span className="text-gray-900 font-bold">{shipping.toFixed(2)} Birr</span>
              </div>
              <div className="h-px bg-gray-100 my-4"></div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Grand Total</p>
                  <p className="text-3xl font-black text-gray-900 mt-1">{(subtotal + shipping).toFixed(2)}<span className="text-sm ml-1 text-gray-400 font-medium italic">ETB</span></p>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-gray-900 text-white text-center py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-600 hover:-translate-y-1 shadow-xl shadow-blue-500/10 transition-all active:scale-[0.98]"
            >
              PROCEED TO CHECKOUT
            </Link>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                <FontAwesomeIcon icon={faArrowLeft} />
                <Link to="/product" className="hover:text-gray-900 transition-colors">Back to store</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Shopping Bag.</h1>
            <p className="text-gray-400 font-medium mt-2 italic">Free returns on all orders above 2000 Birr.</p>
        </header>

        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;