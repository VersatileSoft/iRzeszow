export const savePosts = (posts) =>{
    return(dispatch) => {
        dispatch({type: 'SAVE_INCOMING_POST', posts})
    } 
}

export const savePost = (post) =>{
    return(dispatch) => {
        dispatch({type: 'SAVE_POST', post})
    } 
}

