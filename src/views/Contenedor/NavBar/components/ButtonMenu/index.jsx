import '../../../../../FontAwesome';
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ButtonMenu() {
    return (
        <div>
            <span className={styles.btnMenu}><FontAwesomeIcon icon="bars" /></span>
        </div>
    );
}
export { ButtonMenu }