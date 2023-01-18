import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index';
import Movie from './pages/Movie/index';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Movie/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;