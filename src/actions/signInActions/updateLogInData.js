export const updateLogInData = (name, value) =>{
    return(dispatch) => {
        dispatch({type: 'UPDATE_LOG_IN_DATA', name, value})
    } 
}

