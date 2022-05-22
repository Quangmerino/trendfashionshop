import styles from "./style.module.css"
import { Link } from "react-router-dom"

export default function Button (props) {
    return <Link className={props.className || styles.show__more} to="#">{props.name}</Link>
}