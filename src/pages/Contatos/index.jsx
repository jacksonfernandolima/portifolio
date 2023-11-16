import styles from "./Contatos.module.css";
import { LuMail } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";


function Contatos() {
    return (
        <>
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>

            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>

                <a href="mailto:jacksonfernando_lima@outlook.com" 
                target="_blank" rel="noopener noreferrer"> 
                <LuMail  className={styles.icone}/>
                </a>

                <a href="https://www.instagram.com/jackson.devwork/" 
                target="_blank" rel="noopener noreferrer">
                <LuInstagram className={styles.icone}/>
                </a>

                <a href="mailto:jacksonfernando_lima@outlook.com" 
                target="_blank" rel="noopener noreferrer">
                <LuYoutube className={styles.icone}/>
                </a>

                <a href="https://github.com/jacksonfernandolima" 
                target="_blank" rel="noopener noreferrer">
                <LuGithub className={styles.icone}/>
                </a>

                <a href="https://www.linkedin.com/in/jackson-fernando-8597911ba/" 
                target="_blank" rel="noopener noreferrer">
                <LuLinkedin className={styles.icone}/>
                </a>
            </div>
        </section>
        </>
    );
}

export default Contatos;