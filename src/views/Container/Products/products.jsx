import { SearchBox } from "./components/SearchBox/searchBox";
import styles from "./styles.module.css";
import { useState } from "react";
import { Card } from "./components/Card/card";
import data from "../../../data/products.json";
import { CartButton } from "./components/CartButton/cartButton";
import { Link } from 'react-router-dom';
function Products(props) {
  const {obj} = props
  const [filterData, setFilterData] = useState(data);
  const [searchText, setSearchText] = useState("");

  const category = (text) => {
    setSearchText(text);
  }
  const filter = (type) => {
    setFilterData(
      data.filter((val) => {
        
        return (val.type.toLowerCase().includes(type.toLowerCase()) || val.name.toLowerCase().includes(type.toLowerCase()));
      })
    );
  };
  
  return (
    <div className={styles.products}>
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
            obj={obj}
              />
            ))}
      </div>
      <Link to="/cart"><CartButton/></Link>
    </div>
  );
}
export { Products };
