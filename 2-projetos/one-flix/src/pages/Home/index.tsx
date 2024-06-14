import { useEffect, useState } from "react";
import api from "../../services/api";

function Home(): JSX.Element {
    const [filmes, setFilmes] = useState();

    useEffect( () => {
        async function carregaApi() {
            const resposta = await api.get('movie/now_playing', {
                params: {
                    api_key: '184ee90db92bf2330058b37260977a7f',
                    language: 'pt-BR',
                    page: 1
                }
            });

            console.log(resposta.data.results);
        }

        carregaApi();
    }, []);

    return (
        <div>
            <h1>Bem vindo ao Home</h1>
        </div>
    );
}

export default Home;