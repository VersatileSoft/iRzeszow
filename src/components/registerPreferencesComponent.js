import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { TextField, NumberTextField } from 'react-final-form-antd';
import { Input, Switch } from 'antd';
import CustomField from './CustomField';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences"

class RegisterPreferencesComponent extends Component {

    submitForm = () => {
        console.log("CCA");
    }

    handleChange = () => {
        
    }

    validateForm = () => {
        console.log("BB");
    }

    render() {
        return (
            <Form 
                onSubmit={this.submitForm}
                validate={this.validateForm}
                render={({ handleSubmit, pristine, invalid }) => (
                    <div>
                        <CustomField
                            name={"Podaj nazwę"}
                            component={TextField}
                            onChange={ e => {this.handleChange('name', e.target.value)}}
                        />

                        <CustomField
                            name={"Imię"}
                            component={TextField}
                            onChange={this.handleChange}
                        />

                        <CustomField
                            name={"Nazwisko"}
                            component={TextField}
                            onChange={this.handleChange}
                        />

                        <CustomField
                            name={"Nazwisko"}
                            component={TextField}
                            onChange={this.handleChange}
                        />

                        <CustomField
                            name={"Hasło"}
                            component={TextField}
                            onChange={this.handleChange}
                        />

                        <CustomField
                            name={"Powtórz hasło"}
                            component={TextField}
                            onChange={this.handleChange}
                        />

                        <Switch

                        />

                        <CustomField
                            name={"Email"}
                            component={TextField}
                            onChange={this.handleChange}
                        />

                        <CustomField
                            name={"Powtórz hasło"}
                            component={NumberTextField}
                            onChange={this.handleChange}
                        />
                    </div>
                )}
            />
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