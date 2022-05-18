import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logoSite from "../../../assets/images/trendy.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logoSite} alt="logo" /></Link>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <Link className={styles.login} to="/login">
        Login
      </Link>
    </header>
  );
}
