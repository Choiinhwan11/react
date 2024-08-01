//1. 액션 생성
// 모듈의 이름을 앞에 붙여주어 다른 module과의 액션명 중복 방지
const RED = 'color/RED';
const GREEN = 'color/GREEN';
const BLUE = 'color/BLUE';
const MAGENTA = 'color/MAGENTA';

//2. 액션 내보내기

export const red = () => ({ type: RED } )
export const blue = () =>  ({ type: BLUE } )
export const green = () =>  ({ type: GREEN } )
export const magenta = () =>  ({ type: MAGENTA } )

//3. 초기 상태(초기값) 설정

const initialState = { color: 'hotpink' }

//4. 리듀서 만들기 - state,action 파라메터를 참조하여, 새로운 상태 객체를 반환한다.
//초기값을 반드시 주어야 하는것이 차이

const reducer = (state = initialState , action) => {

    switch (action.type) {
        case RED:
            return { color: 'red' }
        case GREEN:
            return { color: 'green' }
        case BLUE:
            return { color: 'blue' }
        case MAGENTA:
            return { color: 'magenta' }
        default : 
            return state
    }

}

//5. 리듀서 내보내기

export default reducer // 컴포넌트가 아니라 순수 javascript