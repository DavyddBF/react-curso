import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";

import Error from "./pages/Error";

function RouterApp(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={ <Home/> } />
               <Route path="/favoritos" element={ <Favoritos/> } />
               <Route path="/filme/:id" element={ <Filme/> } /> 

               <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;