import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import SingleMovie from '../SingleMovie/SingleMovie';

const MoviesContainer = () => {

    const [movies , setMovies] = useState([]);
    const [watchTime , setWatchTime] = useState(0);

    useState(()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data=> setMovies(data))
    },[])

    const handleMovie=(time)=>{
        setWatchTime(watchTime+time);
    }


    return (
        <div className='position-relative'>

            <div className="row g-2 p-1">

                <div className="col-12  col-lg-9 p-2">

                    <div className="row row-cols-1  row-cols-sm-2 row-cols-md-3 g-1">
                    
                        {
                        movies.map(movie => <SingleMovie
                            key = {movie.movieName}
                            movie={movie}
                            handleMovie={handleMovie}
                        >

                        </SingleMovie>)
                        }

                        
                    </div>

                </div>

                <div className="col-12  col-lg-3 bg-black text-white">

                        <Cart watchTime={watchTime}></Cart>
                    
                </div>


            </div>
            
        </div>
    );
};

export default MoviesContainer;