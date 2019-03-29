const initState = {
   preferencesData:{
       profession: '',
       tagId: [],
   }
}

const updatePreferencesReducer = (state = initState, action) =>{
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

export default updatePreferencesReducer;