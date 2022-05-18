import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Product(props) {
  return (
    <article className={styles.product__item}>
      {props.img && props.img.length && (
        <Link to="#">
          <label className={styles.label__coupon}>20%</label>
          <img src={props.img[0]} className={styles.img1} alt="product img" />
          <img src={props.img[1]} className={styles.img2} alt="product img" />
        </Link>
      )}
      <Link to="#" className={styles.product__item__name}>
        {props.name}
      </Link>
      <div className={styles.product__price}>
        <span className={styles.product__price__old}>{props.price_old}</span>
        <span className={styles.product__price__current}>
          {props.price_current}
        </span>
      </div>
    </article>
  );
}
