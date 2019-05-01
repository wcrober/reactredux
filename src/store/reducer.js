// Set the initial State
const initialState = {
    counter: 100,
    books: ['Book1','Book2']
}

const reducer = (state = initialState, action)=> {
    if(action.type === 'INC_COUNTER') {
        return{
            ...state,
            counter: state.counter +1
        }
    } else if (action.type === 'DEC_COUNTER') {
        return{
            ...state,
            counter: state.counter -1
        }

    } else if (action.type === 'ADD_TEN'){
        return{
            ...state,
            counter: state.counter + action.value
        }
    } else if(action.type === 'MINUS_TEN')
        return{
            ...state,
            counter: state.counter - action.value
        }

   return state 

}

export default reducer