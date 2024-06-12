import { Link } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <div className='container'>
      <h1>Bem vindo ao Home</h1>
      
      <ul>
        <li>Ir para o <Link to='/produto/13'>produto 13</Link></li>
      </ul>
    </div>
  )
}
  
export default Home;