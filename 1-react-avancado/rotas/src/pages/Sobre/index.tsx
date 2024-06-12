import { Link } from "react-router-dom";

function Sobre(): JSX.Element {
  return (
    <div>
      <h1>Bem vindo ao Sobre</h1>

      <Link to='/'>Pagina Home</Link>
    </div>
  )
}

export default Sobre;