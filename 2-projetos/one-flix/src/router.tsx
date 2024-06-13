import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";

import Error from "./pages/Error";

function Rotas(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={ <Home/> } /> 
               <Route path="/filme/:id" element={ <Filme/> } /> 

               <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;