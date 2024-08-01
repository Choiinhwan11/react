import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {tiger,dog,cat,chick} from '../store/modules/animal'

const Animal = () => {
    const name = useSelector(state=>state.animal.name)
    const crying = useSelector(state =>state.animal.crying)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>동물의 울음소리</h1>
            <h1>{name} / {crying}</h1>
            <p>

                <button onClick = { () => dispatch( tiger())}> 호랑이 </button>
                <button onClick = { () => dispatch( dog())}> 강아지 </button>
                <button onClick = { () => dispatch( cat())}> 고양이 </button>
                <button onClick = { () => dispatch( chick())}> 병아리 </button>

            </p>



        </div>
    );
};

export default Animal;