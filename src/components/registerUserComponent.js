import React, { Component } from 'react';

import { Form, Field } from 'react-final-form';
import { TextField, NumberTextField } from 'react-final-form-antd';

import { Input, Switch } from 'antd';

import CustomField from './CustomField';

class RegisterUserComponent extends Component {

    submitForm() {
        console.log("CCA");
    }

    handleChange() {
        console.log("AA");
    }

    validateForm() {
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
                            name={"Nazwa użytkownika"}
                            component={TextField}
                            onChange={this.handleChange}

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

export default RegisterUserComponent;