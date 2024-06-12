import { Link } from "react-router-dom";

function Contato(): JSX.Element {
    return (
        <div>

            <Link to='/'>Home</Link>
            <Link to='/sonbre'>Sobre</Link>
        </div>
    );
}

export default Contato;