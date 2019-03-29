import React, { Component } from 'react';

import { Form, Field } from 'react-final-form';

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
                        <Field
                            name="name"
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
        );
    }

}

export default RegisterUserComponent;