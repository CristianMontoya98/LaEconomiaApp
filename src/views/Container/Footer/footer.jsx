import styles from './styles.module.css';
function Footer() {
    return (
        <footer className={styles.footer}>
            <p><i className="fas fa-phone-alt"></i> +57 322 287 7692</p>
            <p><i className="fas fa-calendar-alt"></i> Lunes a Viernes <br /> 10:00 a.m. - 8:00 p.m.</p>
            <p>Minifruver La economía ©</p>
        </footer>

    );
}
export {Footer}