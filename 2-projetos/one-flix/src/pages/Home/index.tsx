import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import api from "../../services/api";
import Filme from "../../filmes";

function Home(): JSX.Element {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    useEffect( () => {
        async function carregaApi(): Promise<void> {
            const resposta: AxiosResponse<any, any> = await api.get('movie/now_playing', {
                params: {
                    api_key: '184ee90db92bf2330058b37260977a7f',
                    language: 'pt-BR',
                    page: 1
                }
            });

            const resultados: Filme[] = resposta.data.results;
            setFilmes(resultados);
        }

        carregaApi();
    }, []);

    return (
        <div className="container">
            <div>
            </div>
        </div>
    );
}

export default Home;