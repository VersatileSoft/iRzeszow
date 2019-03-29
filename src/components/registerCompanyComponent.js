import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';

class RegisterCompanyComponent extends Component {

    render() {
        return (
            <div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))}
    }
  }

export default connect(null, mapDispatchToProps)(RegisterCompanyComponent);