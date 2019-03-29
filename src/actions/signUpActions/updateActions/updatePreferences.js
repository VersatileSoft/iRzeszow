export const updatePreferences = (name, value) =>{
    return(dispatch) => {
        dispatch({type: 'UPDATE_PREFERENCES', name, value})
    } 
}

