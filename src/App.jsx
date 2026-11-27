import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <div className={`main-div ${theme}`}>
              <Navbar />
              <div className="content-layout">
                <Sidebar />
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={
                      <>
                        <ProductList />
                        <Cart />
                        <Profile />
                      </>
                    } />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/orders" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </div>
              </div>
              <Footer/>
            </div>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  )
}
export default App

