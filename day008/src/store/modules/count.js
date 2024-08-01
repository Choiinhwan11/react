//1. 액션 생성
    // 모듈의 이름을 앞에 붙여주어 다른 module과의 액션명 중복 방지
    const INCREMENT = 'count/INCREMENT'
    const DECREMENT = 'count/DECREMENT'
    const RESET = 'count/RESET'

//2. 액션 내보내기

    export const increment = () =>({type:INCREMENT})
    export const decrement = () =>({type:DECREMENT})
    export const reset = () =>({type:RESET})

//3. 초기 상태 설정
    const initialState = { count : 0 }

//4. reducer 생성
    const reducer = (state=initialState, action) => {
        
        switch(action.type){
            case INCREMENT:
                return { count : state.count+1 }
            case DECREMENT:
                return { count : state.count-1 }
            case RESET:
                return { count : 0 }
            default :
                return state 
        }
    }

//5. reducer 내보내기

    export default reducer