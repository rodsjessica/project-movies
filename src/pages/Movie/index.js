import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './styles.css';
import {toast} from 'react-toastify';

function Movie() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                console.log('filme não encontrado');
                navigate('/', {replace: true});
            })
        }
        loadMovies();

        return () => {
            console.log('componente desmontado')
        }
    }, [navigate, id])

    function saveMovie(){
        const myList = localStorage.getItem("@moviesTips");

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((movieSaved) => movieSaved.id === movies.id);

        if(hasMovie){
            toast.warn("Esse filme já está na lista");
            return;
        }else{
            toast.success("Filme salvo com sucesso!");
        }

        savedMovies.push(movies);
        localStorage.setItem("@moviesTips", JSON.stringify(savedMovies));
    }

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
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external noreferrer" href={`https://youtube.com/results?search_query=${movies.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movie;