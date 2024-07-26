import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function RouterApp() {
  return (
    <Routes>
      <Route path="/" Component={ <Home/> } />
    </Routes>
  );
}

export default RouterApp;