import { BrowserRouter, Routes, Route } from "react-router-dom";

// Paginas
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import Error from "./pages/Error";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";


function RouterApp(): JSX.Element {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
               <Route path="/" element={ <Home/> } />
               <Route path="/favoritos" element={ <Favoritos/> } />
               <Route path="/filme/:id" element={ <Filme/> } />

               <Route path="*" element={ <Error/> } />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RouterApp;