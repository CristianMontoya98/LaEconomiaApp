import { ButtonMenu } from "./components/ButtonMenu";
import styles from "./styles.module.css";
import logo from "../../../img/logo.svg";
function NavBar(props) {
  
  return (
    <div>
      <nav className={styles.nav}>
      <img src={logo} alt="" />
        <ButtonMenu/>
      </nav>
    </div>
  );
}
export { NavBar };
