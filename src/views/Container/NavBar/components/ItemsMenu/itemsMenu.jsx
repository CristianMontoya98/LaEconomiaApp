import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
function ItemsMenu(props) {
  const { show } = props;

  return (
    <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
      <ul className={styles.menu__elements}>
        <li>
          <Link to="/products"><i className="fas fa-home"></i> Inicio</Link>
        </li>
        <li>
          <Link to="/products"><i className="fas fa-boxes"></i> Productos</Link>
        </li>
        <li>
          <Link to="/cart"><i className="fas fa-shopping-cart"></i> Carrito</Link>
        </li>
      </ul>
    </div>
  );
}
export { ItemsMenu };
