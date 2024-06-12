import { Link } from "react-router-dom";

function Header() {
    return (
        <div>

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>contato</Link>
        </div>
    );
}

export default Header;