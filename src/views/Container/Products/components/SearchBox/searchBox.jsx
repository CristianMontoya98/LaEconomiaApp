import { Button } from "../../../Button/button";
import styles from "./styles.module.css";

function SearchBox(props) {
  const { searchText, search, onFilter } = props;
    
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          value={searchText}
          onChange={search}
          placeholder="Buscar..."
        />
        <button onClick={()=>onFilter(searchText)}>
          <i className="fas fa-search"></i>
        </button>
          </div>
          <div className={styles.filters}>
              
              <Button text="FRUTAS" btn={false} click={()=>onFilter("fruta")}/>
              <Button text="VERDURAS" btn={false} click={()=>onFilter("verdura")}/>
          </div>
    </>
  );
}
export { SearchBox };
