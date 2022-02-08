import styles from "./styles.module.css";
function Button(props) {
  const { icon, text, btn, click } = props;
  return (
    <>
      <button
        className={
          btn
            ? `${styles.button} ${styles.button__btn}`
            : `${styles.button} ${styles.button__tag}`
        }
      onClick={click}>
              {icon} {text}
      </button>
    </>
  );
}
export { Button };
