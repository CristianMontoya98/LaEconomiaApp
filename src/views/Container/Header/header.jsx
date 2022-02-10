import styles from "./styles.module.css";
import logo from "../../../img/logo.svg";
import { Button } from "../Button/button";

/* Header component, structure of the header, is used only one time */
function Header() {
  
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__filter}>
          <img src={logo} alt="" />
          <p>
            Minifruver <span>La Economía</span> es un negocio con más de
            <span> 5 años</span> de acreditación, ofrecemos productos de
            excelente calidad al mejor precio.
          </p>
          
          {<Button icon={<i className="fas fa-angle-down"></i>} text="Ver productos" />}
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001F3B"
            fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,213.3C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
export { Header };
