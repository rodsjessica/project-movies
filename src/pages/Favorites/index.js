import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Favorites(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@moviesTips");
        setMovies(JSON.parse(myList) || []);
    }, [])

    return(
        <div className='My-movies'>
            <h1>Meus filmes favoritos</h1>

            <ul>
                {
                    movies.map((item) => {
                        return(
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button>Excluir</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Favorites;