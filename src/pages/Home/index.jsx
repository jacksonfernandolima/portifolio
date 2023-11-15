import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Home.module.css";

function Home() {
    return (
        <>
        <Header />
       <Container>
       <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br/>
              <span>Jackson Fernando</span> <br/>
              Dev Front-End.
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img className={styles.img_home} src='home04.png' alt='Imagem de Home'/>
          </figure>
  
        </section>
       </Container>
        <Footer />
      </>
    );
}

export default Home;
