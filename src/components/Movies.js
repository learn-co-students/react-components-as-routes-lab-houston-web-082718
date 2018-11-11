import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(m=> {
            return (
                <div key={m.title}>
                    <p>{m.title}</p>
                    <p>{m.time}</p>
                    <p>Metascore: {m.metascore ? m.metascore : 'none'}</p>
                    <ul>
                        {m.genres.map(g=> {
                        return <li key={g}>{g}</li>
                        })}
                    </ul>
                    <br/>
                </div>
            )
        })}
    </div>
  );
};

export default Movies;
