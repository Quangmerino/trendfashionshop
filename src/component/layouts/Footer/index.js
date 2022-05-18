import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <ul className={styles.shop}>
          <span>Shop</span>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/clothing"> Clothing </Link>
          </li>
          <li>
            <Link to="/jewelry"> Jewelry </Link>
          </li>
          <li>
            <Link to="/accessories"> Accessories </Link>
          </li>
          <li>
            <Link to="/footwear"> Foot Wear </Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
        </ul>
        <ul className={styles.customer}>
          <span>CUSTOMER SERVICE</span>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
        <ul className={styles.customer}>
          <span>Stay Connected</span>
          <h2>SIGN UP FOR OUR NEWSLETTER</h2>
          <div className={styles.search}>
            <input
              className={styles.search__input}
              type="text"
              placeholder="Enter your email address"
            />
            <button className={styles.btn__search}>Submit</button>
          </div>
        </ul>
      </div>
      <div className={styles.footer__bottom}>
        <span>© 2020 Trendy Shop Fashion. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
