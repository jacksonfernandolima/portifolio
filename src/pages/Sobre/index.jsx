import styles from "./Sobre.module.css";
import imagesobre from "./Imagens/imagesobre.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiGimp } from "react-icons/si";








function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={ imagesobre } alt="imagemsobre"  className={styles.imagemsobre}/>

               <div className={styles.textos}>
               <h2>Sobre</h2>

               <p>Sou <span>Jackson Fernando</span> <br />
               <strong>Dev Front-End</strong></p>

               <p>Sou Bacharel em Administração de empresas e atualmente fiz transição<br /> de carreira  para a área de tecnologia mais precisamente desenvolvimento Web. </p>

               <p>Sou um apaixonado por tecnologia e transformar idéias em realidade digital.</p>

               <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />com foco na boa experiência do usuário.</p>
               
               </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                </div>
             <div className={styles.icon}>
             <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
                <SiVite />
                <FaNodeJs />
                <FaGithub />
                <TbBrandVscode />
                <SiGimp />
             </div>
            
            
        </section>
    );
}

export default Sobre;