import { BrowserRouter } from 'react-router-dom';
import RouterApp from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RouterApp></RouterApp>
    </BrowserRouter>
  );
}

export default App;