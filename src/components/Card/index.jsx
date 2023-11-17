import styles from "./Card.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

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
            <a  href={html_url} target="_blank" rel="nopenner norefferer noreferrer"  className={styles.botao}>
            <BsArrowRight />
            </a>
            </div>
        </section>
    );
}

export default Card;
