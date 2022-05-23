import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logoSite from "../../../assets/images/trendy.png";
import img from "~/assets/images/arrivals1.jpg"
import { useContext } from "react";
import { CartContext } from "~/component/useContext/CartContext/CartProvider";

export default function Header() {
  const {cart} = useContext(CartContext);
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logoSite} alt="logo" /></Link>
      <ul className={styles.social}>
        <li className={styles.cart}>
          <Link to="/product-detail">
            <LocalMallIcon/>
            <span>Shopping Cart</span>
            <span className={styles.label__quantity}>{cart > 1 ? cart : 1}</span>
          </Link>
          <div className={styles.view__box}>
            <div className={styles.view__item}>
              <img src={img} alt=""/>
              <div className={styles.view__item_info}>
                  <span className={styles.item__name}>V Neck With Button Tap Body Romper</span>
                  <span className={styles.item__size}>Size M</span>
                  <div className={styles.total}>
                    <span className={styles.quantity}>{cart > 1 ? cart : 1}</span>
                    X
                    <span className={styles.price}>$225</span>
                  </div>
              </div>
            </div>
            <div className={styles.check}>
              <span className={styles.check__price}>Total : ${(cart > 1 ? cart : 1) * 255}</span>
              <button className={styles.btn__checkout}>Check Out</button>
              <button className={styles.btn__view}>View Cart</button>
            </div>
          </div>
        </li>
        <li className={styles.cart}>
          <Link to="/product-detail">
            <FavoriteIcon/>
            <span>My Wish List</span>
          </Link>
          <div className={styles.view__box}>
            <div className={styles.view__item}>
              <img src={img} alt=""/>
              <div className={styles.view__item_info}>
                  <span className={styles.item__name}>V Neck With Button Tap Body Romper</span>
                  <span className={styles.item__size}>Size M</span>
                  <div className={styles.total}>
                    <span className={styles.quantity}>1</span>
                    X
                    <span className={styles.price}>$225</span>
                  </div>
              </div>
            </div>
            <div className={styles.check}>
              <span className={styles.check__price}>Total : $225</span>
              <button className={styles.btn__checkout}>Check Out</button>
              <button className={styles.btn__view}>View Cart</button>
            </div>
          </div>
        </li>
        <li className={styles.authen}>
          <Link to="/">Sing In</Link>
          or 
          <Link to="/">Create an account</Link>
        </li>
        
      </ul>
    </header>
  );
}

