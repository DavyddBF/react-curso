import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import FilmeType from "../../filmes";

import './filme.css';

function Filme(): JSX.Element {
    const { id }= useParams();
    const [filme, setFilme] = useState<FilmeType>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregaApi() {
            await api.get(`movie/${ id }`, {
                params: {
                    api_key: '184ee90db92bf2330058b37260977a7f',
                    language: 'pt-BR'
                }
            }).then((resposta) => {
                setFilme(resposta.data);
                setLoading(false);
            }).catch(() => {
                console.log("Erro");
            });
        }

        carregaApi();

        return () => {
            console.log('Componente desconstruido');
        }
    }, []);

    if(loading) {
        return (
            <div className="loading">
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>{ filme.title }</h1>
            <img src={ `https://image.tmdb.org/t/p/original/${filme.backdrop_path}` } alt="" />
        </div>
    );
}

export default Filme;