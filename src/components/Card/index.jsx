import styles from "./Card.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}> 
            <div className={styles.card_icones}>
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
            </div>
            <Link  to={html_url} className={styles.botao}>
            <BsArrowRight />
            </Link>
            </div>
        </section>
    );
}

export default Card;
