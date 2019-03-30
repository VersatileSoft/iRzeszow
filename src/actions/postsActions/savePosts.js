export const savePosts = (posts) =>{
    return(dispatch) => {
        dispatch({type: 'SAVE_POST', posts})
    } 
}

