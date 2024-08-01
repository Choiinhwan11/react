import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {red,green,blue,magenta} from '../store/modules/color'


const Color = () => {
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()


    
    return (
        <div>

            <h1 style={{ color : color }}>Color : { color }</h1>

            <p>

                <button onClick={ () => dispatch(red())}>RED</button>
                <button onClick={ () => dispatch(green())}>GREEN</button>
                <button onClick={ () => dispatch(blue())}>BLUE</button>
                <button onClick={ () => dispatch(magenta())}>MAGENTA</button>

            </p>

        </div>
    );
};

export default Color;