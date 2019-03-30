import React, { Component } from 'react';
import { connect } from 'react-redux'
import RegisterCompanyComponent from './registerCompanyComponent';
import RegisterPreferencesComponent from './registerPreferencesComponent';
import RegisterUserComponent from './registerUserComponent';
import MainComponent from './mainComponent';

class RegisterMainComponent extends Component {

    render() {

        //Get from redux main state

        let component = null;
        switch (this.props.registerState) {
            case 0: 
            component = <MainComponent/>; break;
            case 2: 
                component = <RegisterCompanyComponent/>; break;
            case 3: 
                component = <RegisterPreferencesComponent/>; break;
            default:
                component = <RegisterUserComponent/>; break;
        }
        return (
            <div>
                {component}
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        registerState: state.global.registerState
    }
}

export default connect(mapStateToProps)(RegisterMainComponent);