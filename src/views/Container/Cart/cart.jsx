import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../Products/components/Card/card';
import styles from './styles.module.css';
/* Cart component with the structure of the shopping cart
get a list with the products added in the app and render it in cards */
function Cart(props) {
  const { list, setList } = props;
  const [totalFinal, setTotalFinal] = useState(0);
  const [nameDom, setNameDom] = useState("");
  const [addressDom, setAddressDom] = useState("");
  const handleTextName = ({ target: { value } }) => setNameDom(value);
  const handleTextAddress = ({ target: { value } }) => setAddressDom(value);
  let message = "";
  let ref = "";
  /* Function to delete a product in the cart */
  const removeProductInCart = (object) => {
    setList(
      list.filter((val) => {
        return (object.name !== val.name && val);
      })
    );
  };
  /* UseEffect to realize the sum of all the product when the array of
  cart elements change */
  useEffect(() => {
    let totalF = 0;
    
    list.forEach(element => {
      totalF = totalF + (element.price * element.quantity);
      
    });
    setTotalFinal(totalF);
  },[list])
  
  
  

  list.forEach((element) => {message += `${element.name}: ${element.quantity} libras $${element.total}%0A`});
  ref = `https://api.whatsapp.com/send?phone=+573155299982&text=Nombre: ${nameDom}%0A Direccion: ${addressDom}%0A ${message}%0A Total a pagar: $${totalFinal}`;

  return (
    <section className={styles.cart}>
      <div className={styles.cart__title}>
      <div className={styles.cart__titleLine}></div>
      <h1>CARRITO</h1>
      <div className={styles.cart__titleLine}></div>
      </div>
      <h2>Tu pedido</h2>
      <div className={styles.cart__cards}>
        {list?.map((value, index) => (
              <Card
            key={index}
            name={value.name}
            price={value.price}
            image={value.image}
            iconBtn={<i className="fas fa-trash"></i>}
            textBtnCard="Eliminar"
            amount={<h2>Cantidad: </h2>}
            amountVal={value.quantity}
            band={true}
            totalVal={value.quantity * value.price}
            click={removeProductInCart}
            
          />
            ))}
      </div>
      <div className={styles.cart__title}>
      <div className={styles.cart__titleLine}></div>
      <h1>TOTAL</h1>
      <div className={styles.cart__titleLine}></div>
      </div>
      <h3>${totalFinal}</h3>
      <div className={styles.cart__infoDom}>
      <h2>Direccion *</h2>
      <input type="text" value={addressDom} onChange={handleTextAddress} placeholder='Digita tu dirección'/>
      <h2>Nombre *</h2>
        <input type="text"  value={nameDom} onChange={handleTextName} placeholder='Digita tu nombre' />
        <div className={styles.cart__infoDomButtons}>
          <a href={ref} target="_blank" rel="noreferrer" className={(nameDom.length === 0 || addressDom.length === 0) && styles.disabled}>
            <button className={`${styles.button} ${(nameDom.length === 0 || addressDom.length === 0) && styles.btnDisabled} `}>
              <i className="fas fa-truck"></i>Comprar</button></a>
            <Link to="/products"><button className={styles.button}><i className="fas fa-arrow-alt-circle-left" ></i>Regresar</button></Link>
          </div>
      </div>    
    </section>
  );
}
export { Cart };
