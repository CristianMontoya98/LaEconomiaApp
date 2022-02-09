import styles from "./styles.module.css";
function Button(props) {
  const { icon, text, click } = props;
  /*  */
 
  return (
    <>
      <button
        className={styles.button}
        onClick={click}
      >{icon} {text} </button>
    </>
  );
}
export { Button };
