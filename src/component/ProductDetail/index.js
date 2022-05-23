import { useContext } from "react";
import { Link } from "react-router-dom";
import { default as image1, default as imageDetail } from "~/assets/images/arrivals1.jpg";
import image2 from "~/assets/images/arrivals4.jpg";
import Button from "../button/button";
import Product from "../products/arrivals";
import { CartContext } from "../useContext/CartContext/CartProvider";
import styles from "./styles.module.css";

export default function ProductDetail () {
    const {cart, changeQuantity} = useContext(CartContext);
    return (
        <>
            <div className={styles.productDetail}>
            <div className={styles.product__detail}>
                <div className={styles.product__image}>
                    <label className={styles.label__coupon}>20%</label>
                    <img src={imageDetail} alt="Detail"/>
                </div>
                <div className={styles.detail__slider}>
                    {/* <SlideProduct img={imageDetail}/> */}
                </div>
            </div>
            <div className={styles.product__info}>
                <span className={styles.product__name}>Puff Sleeved Waffle Top</span>
                <div className={styles.product__price}>
                    <span className={styles.price__old}>$107.50</span>
                    <span className={styles.price__current}>$85.50</span>
                </div>
                <div className={styles.product__color}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.product__size}></div>
                <div className={styles.product__quantity}>
                    <button onClick={() => changeQuantity('unMore')}>-</button>
                    <span>{cart > 1 ? cart : 1}</span>
                    <button onClick={() =>  changeQuantity('more')}>+</button>
                </div>
                <div className={styles.btn__cart}>
                    <Button className={styles.btn} name="ADD TO CART"/>
                    <Button className={styles.btn} name="ADD TO MY FAVORITE"/>
                </div>
                <Button className={styles.buy__now} name="BUY IT NOW"/>

                <div className={styles.des}>
                    <span className={styles.des__title}>DESCRIPTION</span>
                    <div className={styles.des__content}>
                        <p>Strapless, long trouser jumpsuit. Front bust ties, ruched back, short ankle side split with decorative button. Akosee branded waist drawstring with silver cord ends.</p>
                        <span>Model wears size 36.</span> 
                    </div>
                </div>
                <div className={styles.question}>
                    <span className={styles.question__title}>HAVE QUESTIONS?</span>
                    <Link to="">ASK AN EXPERT</Link>
                </div>
            </div>
            </div>
            <div className={styles.related}>
                <span className={styles.related__title}>RELATED PRODUCTS</span>
                <div className={styles.related__product}>
                    <Product 
                    img={[image1,image2]} 
                    name="Safari Jumpsuit" 
                    price_current="$225.00" 
                    price_old="$285.00"
                    />
                    <Product 
                    img={[image1,image2]} 
                    name="Safari Jumpsuit" 
                    price_current="$225.00" 
                    price_old="$285.00"
                    />
                    <Product 
                    img={[image1,image2]} 
                    name="Safari Jumpsuit" 
                    price_current="$225.00" 
                    price_old="$285.00"
                    />
                    <Product 
                    img={[image1,image2]} 
                    name="Safari Jumpsuit" 
                    price_current="$225.00" 
                    price_old="$285.00"
                    />
                </div>
            </div>
        </>
    )
}