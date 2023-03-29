import React, { useEffect, useState } from 'react';

const Cart = ({watchTime}) => {

    const [time , setTime] = useState(watchTime)
    let totallTime=time;


    useEffect(()=>{
        setTime(watchTime)
    },[watchTime])

    const reduceTime=(rt)=>{
        setTime(time-rt);
    }

    return (
        <div className='position-sticky top-0 text-center'>
            <h3 className=''>Watch Hour Calculation: </h3>

            <h5>Watch Time: {watchTime}</h5>

            <h5>Break Time: </h5>
            <div className="d-flex justify-content-around">
                <button onClick={()=> reduceTime(15)} type="button" className="btn btn-primary">15</button>
                <button onClick={()=> reduceTime(30)} type="button" className="btn btn-warning">30</button>
                <button onClick={()=> reduceTime(60)} type="button" className="btn btn-info">60</button>
            </div>

            <h5>Totall Watch Time: {time}</h5>

        </div>
    );
};

export default Cart;