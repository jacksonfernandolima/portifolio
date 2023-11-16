import styles from "./Card.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";


function Card() {
    return (
        <section className={styles.card}>
            <h3>Título do Projeto</h3>
            <p>Texto descritivo do projeto</p>
            <div className={styles.card_footer}> 
            <div className={styles.card_icones}>
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
            </div>
            <button className={styles.botao}>
            <BsArrowRight />
            </button>
            </div>
        </section>
    );
}

export default Card;
