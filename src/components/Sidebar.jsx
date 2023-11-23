import styles from "./sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of Cities</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer>
    </aside>
  );
}

export default SideBar;
