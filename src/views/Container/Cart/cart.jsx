import { Card } from '../Products/components/Card/card';
import styles from './styles.module.css';
function Cart(props) {
  const { list } = props;
  return (
    <div className={styles.cart}>
      <div className={styles.cart__title}>
      <div className={styles.cart__titleLine}></div>
      <h1>CARRITO</h1>
      <div className={styles.cart__titleLine}></div>
      </div>
      <div className={styles.cart__cards}>
        {list.map((value, index) => (
              <Card
            key={index}
            name={value.name}
            price={value.price}
            image={value.image}
              />
            ))}
      </div>
    </div>
  );
}
export { Cart };
