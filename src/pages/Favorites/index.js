import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Favorites(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@moviesTips");
        setMovies(JSON.parse(myList) || []);
    }, [])

    function handleDelete(id){
        let filterMovies = movies.filter((item) => {
            return (item.id !== id)
        })

        setMovies(filterMovies);
        localStorage.setItem("@moviesTips", JSON.stringify(filterMovies));
    }

    return(
        <div className='My-movies'>
            <h1>Meus filmes favoritos</h1>

            {movies.length === 0 && <span>Você não possui nenhum filme salvo.</span>}

            <ul>
                {
                    movies.map((item) => {
                        return(
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button onClick={() => handleDelete(item.id)}>Excluir</button>
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