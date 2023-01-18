import { useEffect, useState } from "react";
import api from '../../services/api';

function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "88341034259801aac9792384ba252494",
                    language:"pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results);
        }

        loadMovies();
    }, [])

        return(
            <div>
                <h1>BEM VINDO A HOME</h1>
            </div>
        )
}

export default Home;