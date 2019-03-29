import { Component } from 'react';
import '../styles/signBaseComponent.scss';
import RegisterCompanyComponent from './registerCompanyComponent';
import RegisterPreferencesComponent from './registerPreferencesComponent';

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