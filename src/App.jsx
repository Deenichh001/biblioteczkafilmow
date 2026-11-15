import './index.css'
import { UseState } from 'react';
import FilmForm from './components/Filmform/FilmForm';

function App() {

  const [films, setFilms] = useState(
    'Home Alone',
    'The Elf',
    'The Grinch',
  )

  return ( 
    <>
    <Header /> 

    <FilmForm />
    <FilmList films={films} />

    </>

); 
}

export default App;
