export const companyCreate = (name, value) =>{
    return(dispatch) => {
        dispatch({type: 'COMPANY_CREATE', name, value})
    } 
}

