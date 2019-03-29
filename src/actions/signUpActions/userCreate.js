export const userCreate = (name, value) =>{
    return(dispatch) => {
        dispatch({type: 'USER_CREATE', name, value})
    } 
}

