import styles from './styles.module.css';

function CartButton() {
    return (
        <>
            <button className={styles.btnCart}><span>0</span><i className="fas fa-shopping-cart"></i></button>
        </>
    );
}
export { CartButton };