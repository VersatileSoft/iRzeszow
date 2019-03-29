const initState = {
    logInData: {
        email: '',
        password: ''
    }
}

const signInReducer = (state = initState, action) =>{
    switch(action.type){
        case 'UPDATE_LOG_IN_DATA':
        return{
            ...state,
            logInData:{
                ...state.logInData,
                [action.name]: action.value
            }
        }

        default:
            return state
    }
   
}

export default signInReducer;