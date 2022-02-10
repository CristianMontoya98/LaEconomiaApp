
import styles from "./styles.module.css";
/* ButtonMenu component, structure of the hamburger menu */
function ButtonMenu(props) {
  const { handleClickMenu, iconActive } = props;

  return (
    <>
      
      <span className = {styles.btnMenu} onClick={() => handleClickMenu()}>
        <i className = {iconActive}></i>
      </span>
    </>
  );
}
export { ButtonMenu };
