const initState = {
    registerState: 0,   //0 - none
                        //1 - username and password
                        //2 - company info
                        //3 - preferences

    ip: "ip"
 }
 
 const globalReducer = (state = initState, action) =>{
    switch(action.type) {
        case 'SET_REGISTER_STATE':
            return {
                    ...state,
                    [state.registerState]: action
                }
    }
     return state;
 }
 
 export default globalReducer;