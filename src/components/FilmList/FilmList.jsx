function FilmList({ films }) {
  return (
    <ul>
      {films.map((films, index) => (
        <li key={index}>{films}</li>
      ))}
    </ul>
  )
}

export default FilmList
