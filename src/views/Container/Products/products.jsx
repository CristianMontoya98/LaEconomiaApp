import { SearchBox } from "./components/SearchBox/searchBox";
import styles from "./styles.module.css";
import { useState } from "react";
import { Card } from "./components/Card/card";
import data from "../../../data/products.json";

function Products() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = ({ target: { value } }) => setSearchText(value);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const filter = (type) => {

    setIsFiltered(true);
    setFilterData(
      data.filter((val) => {
        return (val.type.toLowerCase().includes(type.toLowerCase())|| val.name.toLowerCase().includes(type.toLowerCase()));
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
      <SearchBox
        searchText={searchText}
        search={handleSearch}
        onFilter={filter}
      />
      <div className={styles.cards}>
        {isFiltered
          ? filterData.map((value, index) => (
              <Card
                key={index}
                name={value.name}
                price={value.price}
                image={value.image}
              />
            ))
          : data?.map((value, index) => (
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
export { Products };
