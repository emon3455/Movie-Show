import React, { useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const MoviesContainer = () => {

    const [movies , setMovies] = useState([]);

    useState(()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data=> setMovies(data))
    },[])

    console.log(movies);


    return (
        <div className=''>

            <div className="row g-2 p-1">

                <div className="col-12  col-lg-9 p-2">

                    <div class="row row-cols-1  row-cols-sm-2 row-cols-md-3 g-1">
                    
                        {
                        movies.map(movie => <SingleMovie movie={movie}></SingleMovie>)
                        }

                        
                    </div>

                </div>

                <div className="col-12  col-lg-3 bg-black text-white">

                    
                </div>


            </div>
            
        </div>
    );
};

export default MoviesContainer;