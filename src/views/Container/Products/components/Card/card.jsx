import { useState, useEffect } from "react";

import { Button } from "../../../Button/button";
import styles from "./styles.module.css";
/* Card component, structure of the cards */
function Card(props) {
  const { name, image, price,  iconBtn,textBtnCard, amount,amountVal, band, totalVal, click, setTotalFinal, verifyParent} = props;
  const [cont, setCont] = useState(band ? amountVal : 1);
  const [totalProduct, setTotalProduct] = useState(totalVal);
  
  /* Object with the info of the product to add in the list of the cart */
    let aux = {
    name: name,
    price: price,
    image: image,
    quantity:cont,
    total: totalProduct,

  }

  useEffect(() => {
    setTotalProduct(cont * price);
  },[cont,price])

  /*Function to increment the amount of the product */
  const increment = () => {
    setCont(cont + 1);
    if(verifyParent){setTotalFinal((totalFinal)=>totalFinal + price);}
    
  };

 /*Function to decrement the amount of the product */
  const decrement = () => {
    if (cont > 1) { setCont(cont - 1); }
    if(verifyParent){setTotalFinal((totalFinal)=>totalFinal - price)}
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{name}</h2>
      <div className={styles.card__product}>
        <div className={styles.card__productImage}>
          <img src={image} alt="tomate" />
        </div>
        <div className={styles.card__productText}>
          <h2>Precio: ${price} / libra</h2>
          {amount}
          <span>
            
            <button onClick={decrement}>
              <i className="fas fa-minus"></i>
            </button>
            <h2>{cont}</h2>
            <button onClick={() => { increment(); }}>
              <i className="fas fa-plus"></i>
            </button>
          </span>
          <h2>Total: ${totalProduct}</h2>
        </div>
      </div>
      <Button icon={iconBtn} text={textBtnCard} click={()=>click(aux)}  />
    </div>
  );
}
export { Card };
