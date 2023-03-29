import React from 'react';

const SingleMovie = (props) => {

    console.log(props.movie);
    const {movieName,watchTime,description, poster,category,imdbRating} = props.movie;


    return (
        <>
            
            <div className="col">
                <div className="card h-100">
                    <img className="w-50 h-50 m-auto" src={poster} alt="movie image"/>
                    <div className="p-1">
                            <h5 className="card-title text-center">{movieName}</h5>
                            <p className="card-text">
                                <strong>Description: </strong> <br />{description}
                            </p>
                            <p><strong>Catagory:</strong> {category}</p>
                            <div className="d-flex justify-content-between">
                                <p><strong>Watch Time: </strong>{watchTime}</p>
                                <p><strong>Rating: </strong>{imdbRating}</p>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-warning">Book Now</button>
                            </div>
                    </div> 

                </div>         
            </div>

        </>
    );
};

export default SingleMovie;