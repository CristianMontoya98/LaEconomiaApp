import { Button } from '../../../Button/button';
import styles from './styles.module.css';

function Card(props) {
    const { name, image, price } = props;
    return (
        <div className={styles.card}>
            <h2 className={styles.card__title}>{name}</h2>
            <div className={styles.card__product}>
                <div className={styles.card__productImage}>
                    <img src={image} alt="tomate" />
                </div>
                <div className={styles.card__productText}>
                    <h2>Precio: ${price} / libra</h2>
                    <span>
                        <button><i className="fas fa-minus"></i></button>
                        <h2>1</h2>
                        <button><i className="fas fa-plus"></i></button>
                    </span>
                </div>
            </div>
            <Button icon={<i className="fas fa-cart-plus"></i>} text="Añadir al carrito"  btn={true} />
        </div>
    );
}
export {Card}