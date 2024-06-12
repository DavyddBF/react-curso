import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Error from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer'


function Rotas(): JSX.Element {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/sobre' element={ <Sobre/> } />
                <Route path='/contato' element={ <Contato/> } />
                <Route path='/produto/:id' element={ <Produto/> } />

                <Route path='*' element={ <Error/> } />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Rotas;