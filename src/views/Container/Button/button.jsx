
import styles from './styles.module.css';
function Button(props) {
    const { text } = props;
    return (
        <div>
            <button className={styles.button}>
                { text }
            </button>
        </div>
    );
}
export { Button }