//1. action 생성
//다른 컴포넌트와의 중복 방지 가독성 증가

const TIGER = 'animal/TIGER'
const DOG ='animal/DOG'
const CAT = 'animal/CAT'
const CHICK = 'animal/CHICK'

//2. 액션 내보내기
// 콜백 함수의 형태로 다른형태가 있으면 더 찾아보기
// 
export const tiger = ()=>({type:TIGER})
                        //소괄호(o) 중괄호(에러남)
export const dog = ()=>({type:DOG})
export const cat = ()=>({type:CAT})
export const chick = ()=>({type:CHICK})

//3. 초기값 생성

const initailState = { name : '돼지', crying : '끼이익~!' }

//4. reducer 생성
const reducer = (state = initailState, action) => {
    switch(action.type){
        case TIGER :
            return { name : '호랑이', crying : '야옹야옹'}
        case DOG :
            return { name : '강아지', crying : '낑낑'}
        case CAT :
            return { name : '고양이', crying : '냐~!야~!'}
        case CHICK :
            return { name : '병아리', crying : '삐약삐약'}
        default :
            return state
    }   
}
//5 reducer 내보내기
export default reducer

