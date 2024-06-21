import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import './filme.css';

function Filme(): JSX.Element {
    const { id }= useParams();

    useEffect(() => {
        async function carregaApi() {
            await api.get(`movie/${ id }`, {
                params: {
                    api_key: '184ee90db92bf2330058b37260977a7f',
                    language: 'pt-BR'
                }
            }).then((resposta) => {
                console.log(resposta);
            }).catch((erro) => {
                console.log(erro);
            });
        }

        carregaApi();
    }, []);

    return (
        <div className="container">
            <h1>Acessar filme com id: { id }</h1>
        </div>
    );
}

export default Filme;