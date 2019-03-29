const initState = {
    userData: {
        name: '',
        lastName: '',
        password: '',
        gender: '',
        email: '',
        phone: ''
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
    }
    return state
}

export default dataReducer;