import { Link } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <div>
      <h1>Bem vindo ao Home</h1>

      <Link to='/sobre'>Sobre</Link>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}
  
export default Home;