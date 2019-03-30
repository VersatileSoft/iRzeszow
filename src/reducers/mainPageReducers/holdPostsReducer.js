const initState = {
    posts: []
}

const holdPostsReducer = (state = initState, action) =>{
    switch(action.type){
        case 'SAVE_POST':
        return{
            ...state,
            posts: [...state.posts, action.posts]
        }

        default:
            return state
    }
   
}

export default holdPostsReducer;