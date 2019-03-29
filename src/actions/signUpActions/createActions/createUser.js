export const userCreate = (userData) =>{
    return(dispatch) => {
        dispatch({type: 'CREATE_USER', userData})
    } 
}

