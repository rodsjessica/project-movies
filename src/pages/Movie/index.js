import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import './styles.css';

function Movie() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {

            await api.get(`movie/${id}`, {
                params: {
                    api_key: "88341034259801aac9792384ba252494",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                console.log(response.data);
                setMovies(response.data);
                setLoading(false);

            })
            .catch(() => {
                console.log('FILME NÃO ENCONTRADO');
            })
        }
        loadMovies();

        return () => {
            console.log('componente desmontado')
        }
    }, [])

    if(loading){
        return(
            <div className="Filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="Filme-info">
            <h1>{movies.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.title} />

            <h3>Sinopse</h3>
            <span>{movies.overview}</span>

            <strong>Avaliação: {movies.vote_average} /10</strong>

            <div className="Area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movie;