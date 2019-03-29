import React, { Component } from 'react';

import { Form, Field } from 'react-final-form';
import { TextField } from 'react-final-form-antd';

import { Input } from 'antd';

import CustomField from './CustomField';

class RegisterPreferencesComponent extends Component {

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
                    <CustomField
                        name={"Podaj nazwę"}
                        component={TextField}
                        onChange={this.handleChange}
                    >

                    </CustomField>
                )}
            />
        );
    }

}

export default RegisterPreferencesComponent;