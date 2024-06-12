import { useParams } from "react-router-dom";

function Produto(): JSX.Element {
    const { id } = useParams();

    return (
        <div className="container">
            <h2>Detalhes dos Produtos</h2>
            <span>Meu produto: { id }</span>
        </div>
    );
}

export default Produto;