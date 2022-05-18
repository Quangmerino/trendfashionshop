import styles from "./style.module.css";

export default function ProductWhyChoose(props) {
  return (
    <div className={styles.product__item}>
      <img src={props.img} alt="product img" />
    </div>
  );
}
