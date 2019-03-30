const initState = {
    posts: [],

    pendingPost: {
        title: "",
        description: "",
        dateFrom: new Date(),
        dateTo: new Date(),
        image: {},
        postType: "",
        tagIds: []
    }  
}

const holdPostsReducer = (state = initState, action) =>{
    switch(action.type){
        case 'SAVE_INCOMING_POST':
            return{
                ...state,
                posts: [...state.posts, action.posts]
            }
        case 'SAVE_POST':
            return{
                ...state,
                post: action.value
            }

        default:
            return state
    }
   
}

export default holdPostsReducer;