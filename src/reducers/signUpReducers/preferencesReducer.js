const initState = {
   preferencesData:{
       profession: '',
       tagId: [],
   }
}

const dataReducer = (state = initState, action) =>{
    switch(action.type){
        case 'UPDATE_PREFERENCES':
            return{
                ...state,
                preferencesData:{
                    ...state.preferencesData,
                    [action.name]: action.value
                }
            }

            default:
                return state
    }
}

export default dataReducer;