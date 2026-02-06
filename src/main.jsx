import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import HomePage from './pages/Homepage.jsx'
import AboutPage from './pages/Aboutpage.jsx'
import ContactPage from './pages/Contactpage.jsx'
import Login from './pages/Loginpage.jsx'
import Register from './pages/RegisterPage.jsx'
import Checkout from './pages/Checkout.jsx'
import ProductsPage from './pages/ProductPage.jsx'
import Product from './pages/SingleProduct.jsx'
import Cart from './pages/CartPage.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from "react-hot-toast";
import Navbar from './component/Navbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Provider store={store}>
<Routes>
<Route path='/' Component={HomePage}></Route>

<Route path="/product/:id" Component={Product}></Route>
<Route path="/contact"  Component={ContactPage}></Route>
<Route path="/login" Component={Login}></Route>
<Route path="/cart" Component={Cart}></Route>
<Route path="/register"  Component={Register}></Route>
<Route path="/product"  Component={ProductsPage}></Route>
<Route path="/checkout"  Component={Checkout}></Route>
<Route path="/about"  Component={AboutPage}></Route>



</Routes>
</Provider>
  <Toaster />
    </Router>

  </StrictMode>,
)
