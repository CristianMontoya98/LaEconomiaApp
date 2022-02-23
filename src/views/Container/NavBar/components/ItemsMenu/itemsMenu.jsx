import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
/*ItemsMenu component, the elements of the menu wich are in the nav */
function ItemsMenu(props) {
  const { show, handleClickItem } = props;

  return (
    <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
      <ul className={styles.menu__elements}>
        <li onClick={()=>handleClickItem()}>
          {/* Links to the diferent routes define with react router in the container component */}
          <Link to="/products"><i className="fas fa-home"></i> Inicio</Link>
        </li>

        <li onClick={()=>handleClickItem()}>
          <Link to="/products"><i className="fas fa-boxes"></i> Productos</Link>
        </li>

        <li onClick={()=>handleClickItem()}>
          <Link to="/cart"><i className="fas fa-shopping-cart"></i> Carrito</Link>
        </li>

      </ul>
    </div>
  );
}
export { ItemsMenu };
