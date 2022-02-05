import { ButtonMenu } from "./components/ButtonMenu/buttonMenu";
import styles from "./styles.module.css";
import logo from "../../../img/logo.svg";
import { useState } from "react";
import { ItemsMenu } from './components/ItemsMenu/itemsMenu';
/* NavBar component, there includes the logo and the menu button */
function NavBar(props) {

  const [toggle,setToggle]  = useState(false);

  /* Function to change the state of the toggle state variable,
     */
  const handleClickMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={styles.nav}>
          <div className={styles.nav__top}>
          <img src={logo} alt="" />
          <ButtonMenu handleClickMenu={handleClickMenu} iconActive={toggle ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ItemsMenu show={toggle}/>
        
      </nav>
    </>
  );
}

export { NavBar };