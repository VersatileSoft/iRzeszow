import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
<<<<<<< HEAD
import { TextField, NumberTextField } from 'react-final-form-antd';
import { Input, Switch } from 'antd';
import CustomField from './CustomField';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences"
=======
import { updatePreferences } from '../actions/signUpActions/updateActions/updatePreferences'
>>>>>>> c7a4fc019a809d95db3e35d54bc092c994020f61

class RegisterPreferencesComponent extends Component {

    submitForm = () => {
        console.log("CCA");
    }

    handleChange = () => {
        console.log("HandleChange");
    }

    validateForm = () => {
        console.log("BB");
    }

    render() {
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
       updatePreferences: (name,value) => {dispatch(updatePreferences(name, value))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(RegisterPreferencesComponent);