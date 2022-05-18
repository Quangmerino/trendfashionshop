import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function ProductShop(props) {
  return (
    <article className={styles.moreToShop__prd__item}>
      <div className={styles.moreToShop__img}>
        <img src={props.img} alt="" />
      </div>
      <span>{props.name}</span>
      <Link to="/shop">{props.btn}</Link>
    </article>
  );
}
