import { Link } from "react-router-dom";

function Header(): JSX.Element {
    return (
        <div>
            <h2>OneRoute</h2>

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>contato</Link>
        </div>
    );
}

export default Header;