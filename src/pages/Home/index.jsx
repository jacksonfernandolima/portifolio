import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
    return (
        <>
        <Header />
        <section className='container'>
          <div className='apresentacao'>
            <p>
              Olá, sou <br/>
              <span>Jackson Fernando</span> <br/>
              Dev Front-End.
            </p>
            <Link to="/sobre" className='btn btn-red'>
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img className='img-home' src='home.png' alt='Imagem de Home'/>
          </figure>
  
        </section>
        <Footer />
      </>
    );
}

export default Home;
