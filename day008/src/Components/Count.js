import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from '../store/modules/count';

const Count = () => {
    
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch();

   
    return (
        <div>
            <h1>카운트 : { count }</h1>

            <p>
                <button onClick ={()=>dispatch(increment())}>증가</button>
                <button onClick ={()=>dispatch(decrement())}>감소</button>
                <button onClick ={()=>dispatch(reset())}>초기화</button>


            </p>
        </div>
    );
};

export default Count;