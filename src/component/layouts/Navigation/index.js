import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav_bar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clothing">Clothing</Link>
        </li>
        <li>
          <Link to="/jewelry">Jewelry</Link>
        </li>
        <li>
          <Link to="/accessories">ACCESSORIES</Link>
        </li>
        <li>
          <Link to="/footwear">FOOT WEAR</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
