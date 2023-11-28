import styles from "./sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise inc.
      </p>
    </footer>
  );
}

export default Footer;
