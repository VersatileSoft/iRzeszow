const initState = {
    registerState: 1,   //0 - none
                        //1 - username and password
                        //2 - company info
                        //3 - preferences

    ip: "http://192.168.43.134:64275/api"
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