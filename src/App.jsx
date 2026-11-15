import './index.css'
import { useState, useEffect } from 'react'
import FilmList from './components/FilmList/FilmList.jsx'

function App() {
  const [films, setFilms] = useState([])
  const [newFilm, setNewFilm] = useState('')

  useEffect(() => {
    setFilms(['Home Alone', 'The Polar Express', 'The Grinch'])
  }, [])

  const addFilm = () => {
    const title = newFilm.trim()
    if (!title) return

    setFilms(prevFilms => [...prevFilms, title])
    setNewFilm('')
  }

  return (
    <>
      <h1>Moje Filmy: </h1>

      <div>
        <input
          placeholder="Wpisz tytuł filmu..."
          value={newFilm}
          onChange={e => setNewFilm(e.target.value)}
        />
        <button onClick={addFilm}>Dodaj film</button>
      </div>

      <FilmList films={films} />
    </>
  )
}

export default App
