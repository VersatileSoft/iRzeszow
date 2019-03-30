const initState = {
    registerState: 1,   //0 - none
                        //1 - username and password
                        //2 - company info
                        //3 - preferences

    ip: "https://irzeszowwebapi.azurewebsites.net/api"
 }
 
 const globalReducer = (state = initState, action) =>{
    switch(action.type) {
        case 'UPDATE_REGISTER_STATE':
            return {
                    ...state,
                    registerState: action.registerState
                }

        default:
        return state;
    }
     
 }
 
 export default globalReducer;