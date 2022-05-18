import styles from "./styles.module.css"
import ImageAbout from "../../assets/images/aboutImage.jpg"

export default function AboutPage() {
    return  <section className= {styles.about}>
                <article className={styles.about__us}>
                    <h1 className={styles.about__title}>
                    TRENDY SHOP FASHION
                    </h1>
                    <ul className={styles.about__des}>
                        <li>
                        TrendyShop, is an online marketplace that keeps up with the change of demand and that stands ready to unseasonably accommodate our customers. We stay on the top of the markets’ trends across continents, countries, and cities with our chains of suppliers and manufacturers around the globe to bring top quality merchandises.
                        </li>
                        <li>
                        We founded TrendyShop after seeing how trends are key and drive the demand of any product. A rare product today can be tomorrow’s product plenty because of the necessity and scarcity. As nobody knows for sure what will happen and when, then our store was born.
                        </li>
                        <li>
                        TrendyShop will monitor some key trends indicators of market’s goods and have a full array of products based what dictates the demand of them. We empower buyers through consistent value-generating goods for individuals and businesses across the globe. We are extremely happy of the opportunities to serve our global communities and to take on global trends. We are a US-based company, but we have global customers and they will all be served.
                        </li>
                        <li>
                        We celebrate and embrace changes and trends through a global lens to provide a collection of goods online that meets all our customers’ demand or request.
                        </li>
                        <li>
                        TrendyShop is a small, independent business, but committed to provide plentiful and trendy goods. Our partners will support us in our endeavor and produce goods to meet the demand of trendy items with ethically quality-based made goods and accessories.
                        </li>
                        <li>
                        We thank all our shoppers for their trendy shopping.
                        </li>
                    </ul>
                </article>
                <div className= {styles.about__img}>
                    <img src={ImageAbout}  alt = "about img"/>
                </div>
            </section>
}