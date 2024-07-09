import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmeType from "../../filmes";
import './favoritos.css';

function Favoritos(): JSX.Element {
    const [filme, setFilme] = useState<FilmeType[]>([]);

    useEffect(() => {
        const listaFilme: string | null = localStorage.getItem('@oneflix');
        setFilme(listaFilme ? JSON.parse(listaFilme) : []);
    }, []);

    return (
        <div className="meus__filmes">
            <h1>Filmes Favoritos:</h1>

            <ul>
                {filme.map((filme) => {
                    return (
                        <li key={ filme.id }>
                            <span>{ filme.title }</span>
                            <div>
                                <Link to={`/filme/${ filme.id }`}>Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;