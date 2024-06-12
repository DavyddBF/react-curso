import { Link } from "react-router-dom";

function Header(): JSX.Element {
    return (
        <header>
            <h2>OneRoute</h2>

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>contato</Link>
        </header>
    );
}

export default Header;