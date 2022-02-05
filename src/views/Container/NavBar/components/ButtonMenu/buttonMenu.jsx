
import styles from "./styles.module.css";

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
