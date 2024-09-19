import './App.css';
import FilmList from './components/FilmList';
import FilmDetails from './components/FilmDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FilmList />} />
        <Route path='/film/:filmId' element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>


  );
}


export default App;
