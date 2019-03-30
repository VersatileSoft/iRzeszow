import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import { updateUser } from '../actions/signUpActions/updateActions/updateUser';

class RegisterUserComponent extends Component {

    state = {
        r_pass: ''
    }

    submitForm() {
        console.log('casdsadsa')
        this.props.updateRegisterState(3)
    }

    handleChange(name, value) {
       this.props.updateUser(name,value)
    }

    handleRChange(name, value) {
        this.setState({
            [name]: value
        })
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
                            placeholder="Podaj imię"
                            component="input"
                            onChange={ e => {this.handleChange('name', e.target.value)}}
                        />

                        <Field
                            name="lastName"
                            placeholder="Nazwisko"
                            component="input"
                            onChange={ e => {this.handleChange('lastName', e.target.value)}}
                        />

                        <Field
                            name="password"
                            placeholder="Hasło"
                            component="input"
                            onChange={ e => {this.handleChange('password', e.target.value)}}
                        />

                        <Field
                            name="r_pass"
                            placeholder="Powtórz hasło"
                            component="input"
                            onChange={ e => {this.handleRChange('r_pass', e.target.value)}}
                        />

                        <Field
                            name="email"
                            component="input"
                            placeholder="Email"
                            onChange={ e => {this.handleChange('email', e.target.value)}}
                        />

                        <Field
                            name="gender"
                            component="input"
                            placeholder="Płeć"
                            onChange={ e => {this.handleChange('gender', e.target.value)}}
                        />

                        <Field
                            name="phone"
                            component="input"
                            placeholder="Numer telefonu"
                            onChange={ e => {this.handleChange('phone', e.target.value)}}
                        />

                        <input type="submit" value="Wyślij mnie"></input>

                    </div>
                )}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))},
       updateUser: (name,value) => {dispatch(updateUser(name,value))}
    }
  }

export default connect(null, mapDispatchToProps)(RegisterUserComponent);