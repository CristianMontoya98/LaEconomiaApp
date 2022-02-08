import { NavBar } from "./NavBar/navBar";
import { Header } from "./Header/header";
import { Products } from "./Products/products";
function Container() {

  return (
    <div>
      <NavBar/>
      <Header />
      <Products/>
      
    </div>
  );
  
}

export { Container };
