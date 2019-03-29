import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences";
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';

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
            <div>
            <Form 
                onSubmit={this.submitForm}
                validate={this.validateForm}
                render={({ handleSubmit, pristine, invalid }) => (
                    <div>
                        <Field
                            placeholder="Podaj nazwę"
                            component="input"
                            onChange={ e => {this.handleChange('name', e.target.value)}}
                        />

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