import React, { useEffect, useState } from 'react';
import { addTime, clearAll } from '../../fakeDB';

const Cart = ({watchTime}) => {

    const [time , setTime] = useState(watchTime)

    useEffect(()=>{
        setTime(watchTime)
        addTime(watchTime);
    },[watchTime])

    const reduceTime=(rt)=>{
        setTime(time-rt);
        addTime(time-rt);
    }

    return (
        <div className='position-sticky top-0 text-center bg-dark text-white p-1'>
            <h3 className=''>Watch Hour Calculation: </h3>

            <h5>Watch Time: {time}</h5>

            <h5>Break Time: </h5>
            <div className="d-flex justify-content-around">
                <button onClick={()=> reduceTime(15)} type="button" className="btn btn-primary">15</button>
                <button onClick={()=> reduceTime(30)} type="button" className="btn btn-warning">30</button>
                <button onClick={()=> reduceTime(60)} type="button" className="btn btn-info">60</button>
            </div>

            <h5>Totall Watch Time: {time}</h5>

            <button onClick={clearAll} type="button" className="btn btn-danger">Clear All</button>

        </div>
    );
};

export default Cart;