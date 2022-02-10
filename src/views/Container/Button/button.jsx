import styles from "./styles.module.css";
/* Component that defines the structure of the diferent buttons with dinamic values */
function Button(props) {
  const { icon, text, click } = props;
  /*  */
 
  return (
    <>
      <button
        className={styles.button}
        onClick={()=>click()}
      >{icon} {text} </button>
    </>
  );
}
export { Button };
