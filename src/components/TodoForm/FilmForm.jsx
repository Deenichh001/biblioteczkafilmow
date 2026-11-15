function FilmForm({ setFilms }) {
    let value = ' ';
    return(
        <div>
            <input 
                placeholder='Wpisz film...' 
                onChange={e => (value = e.target.value)}
            />
            <button 
                onClick={() => {
                    setFilms(prevFilms => [...prevFilms,value]);
                    value = ' ';
                }}>
                Dodaj
            </button>
        </div>
    );
}

export default FilmForm;
