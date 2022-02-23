import { useState } from "react";
import styles from "./styles.module.css";

/* SearchBox component, structure of the searchbox, contains the searchBar and the filters */
function SearchBox(props) {
  const { onFilter, setSearch, category } = props;
  const [searchText, setSearchText] = useState("");
  const handleSearch = ({ target: { value } }) => setSearchText(value);
  const [active, setActive] = useState(true);
  const [inactive, setInactive] = useState(true);
  /* Function to change the states active and inactive,
 this alternate both states to asign the styles in the filter tags
 */
  const changeClass = (tag) => {
    if (tag === 1) {
      setActive(false);
      setInactive(true);
    } else {
      setInactive(false);
      setActive(true);
    }
  };

/*This function clean the search input and re start the styles of the tags*/
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
          className={`${styles.filters__tag} ${active ? styles.filters__unActive : styles.filters__active}`}
          onClick={() => {
            onFilter("fruta");
            changeClass(1);
            category("FRUTAS");
          }}
        >
          FRUTAS
        </button>

        <button
          className={`${styles.filters__tag} ${
            inactive ? styles.filters__unActive : styles.filters__active
          }`}
          onClick={() => {
            onFilter("verdura");
            changeClass(2);
            category("VERDURAS");
          }}
        >
          VERDURAS
        </button>
      </div>
    </>
  );
}
export { SearchBox };
