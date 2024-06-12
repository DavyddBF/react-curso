import { Link } from "react-router-dom";
import './style.css'

function Header(): JSX.Element {
    return (
        <header>
            <h2>OneRoute</h2>

            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>contato</Link>    
            </div>
        </header>
    );
}

export default Header;