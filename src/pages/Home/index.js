import { useEffect, useState } from "react";
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css';

function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        //busca da requisição
        async function loadMovies(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "88341034259801aac9792384ba252494",
                    language:"pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results.slice(0,10));
            setMovies(response.data.results.slice(0, 10))
        }

        loadMovies();
    }, [])

        return(
            <div className="Container">
                <div className="Lista-filmes">
                    {
                        movies.map((item)=>{
                                return(
                                    <article key={item.id}>
                                        <strong>{item.title}</strong>
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                                        <Link to={`/filme/${item.id}`}>Acessar</Link>
                                    </article>
                                )
                        })
                    }

                </div>
                
            </div>
        )
}

export default Home;