import styles from "./styles.module.css";
import logo from "../../../img/logo.svg";
import { Button } from "../Button/button";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__filter}>
        <img src={logo} alt="" />
        <p>
          Minifruver <span>La Economía</span> es un negocio con más de
          <span> 5 años</span> de acreditación, ofrecemos productos de excelente
          calidad al mejor precio.
        </p>
        <Button text="Ver productos"/>
      </div>
    </div>
  );
}

export { Header };
