export const updateRegisterState = (registerState) =>{
    return(dispatch) => {
        dispatch({type: 'UPDATE_REGISTER_STATE', registerState})
    } 
}

