import { SearchBox } from "./components/SearchBox/searchBox";
import styles from "./styles.module.css";
import { useState } from "react";
import { Card } from "./components/Card/card";
import data from "../../../data/products.json";
import { CartButton } from "./components/CartButton/cartButton";
import { Link } from 'react-router-dom';

/* Products component, structure of the products section */

function Products(props) {
  const { list, setList, amount } = props;
  const [filterData, setFilterData] = useState(data);
  const [searchText, setSearchText] = useState("");

  /* This function set the value of the state searchText
   with the value of the search input located in searchBox */
  const category = (text) => {
    setSearchText(text);
  }

  /* Function to filter the data and set the filterData state
  with the corresponding array, use a string called type to
  compares with the propertys type and name of the json  */
  const filter = (type) => {
    setFilterData(
      data.filter((val) => {
        return (val.type.toLowerCase().includes(type.toLowerCase()) || val.name.toLowerCase().includes(type.toLowerCase()));
      })
    );
  };

  /*Function to set the array of products in the cart */
  const correctProduct = (aux) => {
    setList((prev) => [...prev, aux]);
    alert(`Producto ${aux.name} agregado correctamente`);
  }

  /*Function to add the object in the list of the cart */
  const addProductToCart = (aux) => {
    
    let filterObject = list.filter(element => element.name === aux.name);
    filterObject.length === 0 ? correctProduct(aux) : alert(`Ya existe ${aux.name}` )

  }
  
  return ( 
    <section className={styles.products}>
      <div className={styles.products__title}>
        <div className={styles.products__titleLine}></div>
        <h1>PRODUCTOS</h1>
        <div className={styles.products__titleLine}></div>
      </div>
      <SearchBox onFilter={filter} setSearch={setSearchText} category={category}/>
      <p>{filterData.length === 0 && <>No hay resultados para la busqueda: <span>{searchText}</span></>}
      {(searchText.length > 0 && filterData.length > 0) && <>Filtrado por: <span>{searchText}</span></>  }
      </p>
      <div className={styles.cards}>
        {filterData.map((value, index) => (
              <Card
            key={index}
            name={value.name}
            price={value.price}
            image={value.image}
            iconBtn={<i className="fas fa-cart-plus"></i>}
            textBtnCard="Añadir al carrito"
            click={addProductToCart}
            verifyParent={false}
              />
            ))}
      </div>
      <Link to="/cart"><CartButton amount={amount}/></Link>
    </section>
  );
}
export { Products };
