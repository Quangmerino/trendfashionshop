import Button from "../../component/button/button";
import styles from "./styles.module.css";

export default function ContactPage(props) {
  return (
    <article className={styles.contact}>
      <h1 className={styles.contact__title}>DROP US A LINE</h1>
      <p className={styles.contact__des}>
        We’re here to quickly provide you with the info and services you need &
        answer any question you may have
      </p>
      <div className={styles.contact__form}>
        <h1 className={styles.form__title}>SEND US AN EMAIL:</h1>
        <p className={styles.form__des}>ASK US ANYTHING! WE'LL GET BACK TO YOU WITHIN 24-48 HOURS.</p>
        <form>
            <label>
            Your Name:
            <input type="text" name="name" placeholder=""/>
            </label>
            <label>
            Your Phone:
            <input type="text" name="phone" placeholder=""/>
            </label>
            <label>
            Your Email:
            <input type="text" name="email" placeholder=""/>
            </label>
            <label>
            Your Comment:
            <textarea type="" name="comment" placeholder="Please leave your comment here"/>
            </label>
            <Button name="Submit"/>
        </form>
      </div>
    </article>
  );
}
