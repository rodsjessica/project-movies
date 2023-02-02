// Base da URL: http://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=88341034259801aac9792384ba252494&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;