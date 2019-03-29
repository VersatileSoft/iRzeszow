import React, { Component } from 'react';
import { withRouter } from 'react-router'
import RegisterCompanyComponent from './registerCompanyComponent';
import RegisterPreferencesComponent from './registerPreferencesComponent';
import RegisterUserComponent from './registerUserComponent';

class RegisterMainComponent extends Component {

    render() {
        let aa = 1;
        console.log(aa);
        //Get from redux main state

        switch (aa) {
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

export default RegisterMainComponent;