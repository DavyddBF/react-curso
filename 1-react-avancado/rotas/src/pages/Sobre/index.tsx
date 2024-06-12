import { Link } from "react-router-dom";

function Sobre(): JSX.Element {
  return (
    <div>
      <h1>Bem vindo ao Sobre</h1>

      <Link to='/'>Home</Link>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}

export default Sobre;