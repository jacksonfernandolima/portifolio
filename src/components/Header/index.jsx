import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }


    return (
        <header className={styles.header}>
            <Link>
            <img className={styles.logo} src="logo03.png" alt="logo" />
            </Link>
            <Link to="/" >
                <span>JacksonFernando.dev</span>
            </Link>
            <nav className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
             onClick={toggleMenu}
            
            >
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/projetos'>Projetos</Link>
                <Link to='/contatos'>Contatos</Link>
                
            </nav>
            <div className={styles.menuButton}
            onClick={toggleMenu}
            >
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    );
}

export default Header;