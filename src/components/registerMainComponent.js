import React, { Component } from 'react';
import { withRouter } from 'react-router'
import RegisterCompanyComponent from './registerCompanyComponent';
import RegisterPreferencesComponent from './registerPreferencesComponent';
import RegisterUserComponent from './registerUserComponent';

class RegisterMainComponent extends Component {

    render() {
        let aa = 1;
        let component = null;
        switch (aa) {
            case 2: 
                component = <RegisterCompanyComponent/>
            case 3: 
                component = <RegisterPreferencesComponent/>
            default:
                component = <RegisterUserComponent/>
        }

        return (
            component
        )
    }

}

export default RegisterMainComponent;