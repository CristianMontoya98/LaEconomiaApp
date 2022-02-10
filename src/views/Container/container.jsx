import { NavBar } from "./NavBar/navBar";
import { Header } from "./Header/header";
import { Products } from "./Products/products";
import { Cart } from "./Cart/cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { Footer } from "./Footer/footer";

/* Container component, structure of the general container
the routes are defined here because are just 3 */
function Container() {
  const [data, setData] = useState([]);

  return (
    <main>
      <BrowserRouter>
      <NavBar/>
      <Header/>
      
      <Routes>
          <Route path="/" element={<Products obj={setData} amount={data.length}/>} />
        <Route path="/products" element={<Products  obj={setData} amount={data.length}/>} />
          <Route path="/cart" element={<Cart list={data} setList={setData}/>}/>
      </Routes>
      
      <Footer/>
      
      
      </BrowserRouter>
      </main>
  );
  
}

export { Container };
