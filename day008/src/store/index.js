import {combineReducers} from 'redux'
import color from './modules/color.js'
import count from './modules/count.js'
import animal from './modules/animal.js'


export default combineReducers({
    color : color,
    count, //앞뒤가 같을 시에는 축약이 가능하다 . 
    animal : animal
    //객체를 그냥 넘겨준다. 분해 하지 않음
    
})
