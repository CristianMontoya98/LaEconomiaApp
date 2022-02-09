import { useState } from "react";
import { Button } from "../../../Button/button";
import styles from "./styles.module.css";

function Card(props) {
  const { name, image, price, obj } = props;
  const [cont, setCont] = useState(1);
  let aux = {
    name: name,
    price: price,
    image: image,
    quantity:cont
  }
  const increment = () => {
    setCont(cont + 1);
  };

  const decrement = () => {
    if (cont > 1) setCont(cont - 1);
  };

  const setObject=()=>{
    obj((prev)=>[...prev, aux]);
  }
  
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{name}</h2>
      <div className={styles.card__product}>
        <div className={styles.card__productImage}>
          <img src={image} alt="tomate" />
        </div>
        <div className={styles.card__productText}>
          <h2>Precio: ${price} / libra</h2>
          <span>
            <button onClick={decrement}>
              <i className="fas fa-minus"></i>
            </button>
            <h2>{cont}</h2>
            <button onClick={increment}>
              <i className="fas fa-plus"></i>
            </button>
          </span>
        </div>
      </div>
      <Button icon={<i className="fas fa-cart-plus"></i>} text="Añadir al carrito" click={setObject}  />
    </div>
  );
}
export { Card };
