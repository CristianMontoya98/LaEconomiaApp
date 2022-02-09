import { NavBar } from "./NavBar/navBar";
import { Header } from "./Header/header";
import { Products } from "./Products/products";
import { Cart } from "./Cart/cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function Container() {
  const [data, setData] = useState([]);
    
  
  return (
    
      <BrowserRouter>
      <NavBar/>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Products  obj={setData}/>} />
        <Route path="/products" element={<Products  obj={setData}/>} />
        <Route path="/cart" element={<Cart list={data}/>}/>
      </Routes>
      
      
      
      </BrowserRouter>
  );
  
}

export { Container };
