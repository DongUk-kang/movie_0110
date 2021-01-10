import React, {useState, useEffect} from 'react';
import Movie from "./Movie";

const App = () => {

    const [movies, setMovies] = useState([])

    const getData = async () => {
        return (
            await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count")
                .then(data => data.json())
                // .then(jsondata => console.log(jsondata.data.movies))
                .then(jsondata => setMovies(jsondata.data.movies))
                .catch(err => console.log(err))
        )
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {movies.map(movie => (
                <Movie title={movie.title} poster={movie.medium_cover_image} vote={movie.rating} />
            ))}
        </div>
    );
};

export default App;
