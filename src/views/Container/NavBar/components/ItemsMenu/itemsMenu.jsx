import styles from "./styles.module.css";

function ItemsMenu(props) {
  const { show } = props;

  return (
    <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
      <ul className={styles.menu__elements}>
        <li>
          <i className="fas fa-home"></i> Inicio
        </li>
        <li>
          <i className="fas fa-boxes"></i> Productos
        </li>
        <li>
          <i className="fas fa-shopping-cart"></i> Carrito
        </li>
      </ul>
    </div>
  );
}
export { ItemsMenu };
