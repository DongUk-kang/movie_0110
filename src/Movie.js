import React from 'react';

const Movie = ({title, poster, vote}) => {



    return (

        <div>
            <h2>
                {title}
            </h2>
            <h3>
                {vote} / 5.0
            </h3>
            <img src={poster} alt={title} />
        </div>
    );
};

export default Movie;
