import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import RegisterCompanyComponent from './registerCompanyComponent';
import RegisterPreferencesComponent from './registerPreferencesComponent';
import RegisterUserComponent from './registerUserComponent';

class RegisterMainComponent extends Component {

    render() {

        //Get from redux main state

        switch (this.props.registerState) {
            case 2: 
                return (
                    <RegisterCompanyComponent/>
                );
            case 3: 
                return (
                    <RegisterPreferencesComponent/>
                );
            default:
                return (
                    <RegisterUserComponent/>
                );
        }
    }

}

const mapStateToProps = (state) =>{
    return{
        registerState: state.global.registerState
    }
}

export default connect(mapStateToProps)(RegisterMainComponent);