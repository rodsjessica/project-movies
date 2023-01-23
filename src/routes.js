import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index';
import Movie from './pages/Movie/index';
import Erro from "./pages/Erro";

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Movie/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;