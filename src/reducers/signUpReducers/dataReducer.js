const initState = {
    userData: {
        name: '',
        surname: '',
        password: '',
        gender: 0,
        email: '',
        phone: '',
        professionId: 1,
        tagIds: [1]
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