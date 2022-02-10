import styles from './styles.module.css';
/* CartButton component, structure of the button that mantains in the screen */
function CartButton(props) {
    const { amount } = props;
    let amount2 = false;
    if (amount > 9) {
        amount2 = true;
    }
    return (
        <>
            <button className={styles.btnCart}><span>{amount2?"9+":amount}</span><i className="fas fa-shopping-cart"></i></button>
        </>
    );
}
export { CartButton };