import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
