export const companyCreate = (companyData) =>{
    return(dispatch) => {
        dispatch({type: 'CREATE_COMPANY', companyData})
    } 
}

