import styles from "./sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      {/* <p>List of Cities</p> */}

      <Footer />
      {/* <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer> */}
    </aside>
  );
}

export default SideBar;
