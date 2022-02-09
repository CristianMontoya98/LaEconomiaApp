import { useState } from "react";
import styles from "./styles.module.css";

function SearchBox(props) {
  const { onFilter, setSearch, category } = props;
  const [searchText, setSearchText] = useState("");
  const handleSearch = ({ target: { value } }) => setSearchText(value);
  const [active, setActive] = useState(true);
  const [inactive, setInactive] = useState(true);

  const changeClass = () => {
    setActive(false);
    setInactive(true);
  };

  const changeClass2 = () => {
    setInactive(false);
    setActive(true);
  };

  const cleanInput = () => {
    setSearchText("");
    setActive(true);
    setInactive(true);
  };
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Buscar..."
        />
        <button
          onClick={() => {
            onFilter(searchText);
            setSearch(searchText);
            cleanInput();
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.filters__tag} ${
            active ? styles.filters__unActive : styles.filters__active
          }`}
          onClick={() => {
            onFilter("fruta");
            changeClass();
            category("FRUTAS");
          }}
        >FRUTAS</button>
          
        
        <button
          className={`${styles.filters__tag} ${
            inactive ? styles.filters__unActive : styles.filters__active
          }`}
          onClick={() => {
            onFilter("verdura");
            changeClass2();
            category("VERDURAS");
          }}
        >VERDURAS</button>
          
        
      </div>
    </>
  );
}
export { SearchBox };
