import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences";
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import '../styles/UniversalForm.scss';
import Logo from '../images/logo_transparent.png';

class RegisterPreferencesComponent extends Component {

    submitForm = () => {
        console.log("CCA");
    }

    handleChange = (name, value) => {
        this.props.updatePreferences(name,value);
    }

    validateForm = () => {
        console.log("BB");
    }

    render() {
        console.log(this.props.preferencesData.profession)
        return (
            <div className="all">
            <div className="form-box">
             <img src={Logo} alt="logo" />
                    <p>Zarejestruj</p>
                    <p>się</p>
                <Form 
                    onSubmit={this.submitForm}
                    validate={this.validateForm}
                    render={({ handleSubmit, pristine, invalid }) => (
                        <div className="form">
                            <div class="input-wrapper">
                                <Field
                                        placeholder="Podaj nazwę"
                                        onChange={ e => {this.handleChange('name', e.target.value)}}
                                        render={({meta }) => (
                                            <input type="text" id="user" required/>
                                        )}
                                    />
                                <label for="user">user name</label>
                            </div>
                            <Field
                                placeholder="Imię"
                                component="input"
                                onChange={this.handleChange}
                            />

                            <Field
                                placeholder="Nazwisko"
                                component="input"
                                onChange={this.handleChange}
                            />

                            <Field
                                placeholder="Nazwisko"
                                component="input"
                                onChange={this.handleChange}
                            />

                            <Field
                                name="Hasło"
                                component="input"
                                onChange={this.handleChange}
                            />

                            <Field
                                name="Powtórz hasło"
                                component="input"
                                onChange={this.handleChange}
                            />


                            <Field
                                name="Email"
                                component="input"
                                onChange={this.handleChange}
                            />

                            <Field
                                name="Powtórz hasło"
                                component="input"
                                onChange={this.handleChange}
                            />
                        </div>
                    )}
                />
            </div>
            </div>
        );
    }

}

const mapStateToProps = (state) =>{
    return{
        preferencesData: state.preferences.preferencesData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updatePreferences: (name,value) => {dispatch(updatePreferences(name, value))},
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(RegisterPreferencesComponent);