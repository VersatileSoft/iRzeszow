const initState = {
    userData: {
        name: '',
        lastName: '',
        password: '',
        gender: '',
        email: '',
        phone: '',
        profession: 'back-end',
        tagId: [1]
    },

    companyData: {
        companyName: '',
        address: '',
        phone: '',
        website: ''
    }
}

const dataReducer = (state = initState, action) =>{
    switch(action.type){
        case 'UPDATE_USER':
            return{
                ...state,
                userData:{
                    ...state.userData,
                    [action.name]: action.value
                }
            }

        case 'UPDATE_COMPANY':
            return{
                ...state,
                companyData:{
                    ...state.companyData,
                    [action.name]: action.value
                }
            }

            case 'UPDATE_PREFERENCES':
            return{
                ...state,
                userData:{
                    ...state.userData,
                    [action.name]: action.value
                }
            }

            default:
                return state
    }
    
}

export default dataReducer;