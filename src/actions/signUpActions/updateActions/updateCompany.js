export const updateCompany = (name, value) =>{
    return(dispatch) => {
        dispatch({type: 'UPDATE_COMPANY', name, value})
    } 
}

