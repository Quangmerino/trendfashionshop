import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import slideImg from "~/assets/images/slide1.jpg";
import homeImage1 from "~/assets/images/home1.jpg";
import homeImage2 from "~/assets/images/home2.jpg";
import homeImage3 from "~/assets/images/home3.jpg";
import homeImage4 from "~/assets/images/home4.jpg";
import trending1 from "~/assets/images/trending1.jpg";
import trending2 from "~/assets/images/trending2.jpg";
import trending3 from "~/assets/images/trending3.jpg";
import trending4 from "~/assets/images/trending4.jpg";
import trending5 from "~/assets/images/trending5.jpg";
import trending6 from "~/assets/images/trending6.jpg";
import trending7 from "~/assets/images/trending7.jpg";
import trending8 from "~/assets/images/trending8.jpg";
import trending9 from "~/assets/images/trending9.jpg";
import trending12 from "~/assets/images/trending12.jpg";
import collection from "~/assets/images/collection1.jpg";
import moreShop1 from "~/assets/images/moreShop1.jpg";
import moreShop2 from "~/assets/images/moreShop.jpg";
import moreShop3 from "~/assets/images/moreShop3.jpg";
import Product from "~/component/products/arrivals";
import Button from "~/component/button/button";
import ProductShop from "~/component/products/shop";
import ProductWhyChoose from "~/component/products/whyshoose";

export default function HomePage() {
  return (
    <div className={styles.main__content}>
      <div className={styles.slider}>
        <img src={slideImg} alt="slider" />
      </div>
      <article className={styles.why__choose}>
        <h1 className={styles.why__choose__title}>WHY CHOOSE US?</h1>
        <p className={styles.why__choose__des}>
          We at Trendy Shop Fashion aim to bring you the top quality apparels
          and accessories from handpicked suppliers. All our products are
          sourced after series of quality checks and market research.
        </p>
        <div className={styles.why__choose__prd}>
          <div className={styles.why__product}>
            <ProductWhyChoose img={homeImage1} />
            <ProductWhyChoose img={homeImage2} />
            <ProductWhyChoose img={homeImage3} />
            <ProductWhyChoose img={homeImage4} />
          </div>
        </div>
      </article>
      <article className={styles.arrivals}>
        <h1 className={styles.home__title}>NEW ARRIVALS</h1>
        <div className={styles.arrivals__products}>
          <Product
            img={[trending1, trending2]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending3, trending4]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending5, trending9]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending6, trending8]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending9, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending7, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
        </div>
        <Button name="Show more" />
      </article>
      <article className={styles.trending}>
        <h1 className={styles.home__title}>Trending now</h1>
        <div className={styles.trending__products}>
          <Product
            img={[trending6, trending8]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending9, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending7, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending7, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
        </div>
      </article>
      <article className={styles.collection}>
        <h1 className={styles.home__title}>Summer collection</h1>
        <Link to="#">
          <img
            className={styles.collection__img}
            src={collection}
            alt="collection"
          />
        </Link>
      </article>
      <article className={styles.dresses}>
        <h1 className={styles.home__title}>Summer dresses</h1>
        <div className={styles.dresses__products}>
          <Product
            img={[trending1, trending2]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending3, trending4]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending5, trending9]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending6, trending8]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending9, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
          <Product
            img={[trending7, trending12]}
            name="Puff Sleeved Waffle Top"
            price_current="$107.50"
            price_old="$85.50"
          />
        </div>
        <Button name="Show more" />
      </article>
      <article className={styles.moreToShop}>
        <h1 className={styles.moreToShop__title}>More To Shop</h1>
        <div className={styles.moreToShop__prd}>
          <ProductShop
            img={moreShop1}
            name="Puff Sleeved Waffle Top"
            btn="Shop now"
          />
          <ProductShop
            img={moreShop2}
            name="Puff Sleeved Waffle Top"
            btn="Shop now"
          />
          <ProductShop
            img={moreShop3}
            name="Puff Sleeved Waffle Top"
            btn="Shop now"
          />
        </div>
      </article>
    </div>
  );
}
