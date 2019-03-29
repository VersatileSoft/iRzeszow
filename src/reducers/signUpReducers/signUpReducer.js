const initState = {
    userData: {
        name: '',
        lastName: '',
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

const signUpReducer = (state = initState, action) =>{
    return state
}

export default signUpReducer;