import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import { updateUser } from '../actions/signUpActions/updateActions/updateUser';

class RegisterUserComponent extends Component {

    state = {
        r_pass: ''
    }

    submitForm = () => {
        this.props.updateRegisterState(3)
        // axios.post(this.props.ip + '/Account/user', this.props.userData )
        // .then(res =>{
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
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
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="name"
                            placeholder="Podaj imię"
                            component="input"
                            onInput={ e => {this.handleChange('name', e.target.value)}}
                        />

                        <Field
                            name="lastName"
                            placeholder="Nazwisko"
                            component="input"
                            onInput={ e => {this.handleChange('surname', e.target.value)}}
                        />

                        <Field
                            name="password"
                            placeholder="Hasło"
                            component="input"
                            onInput={ e => {this.handleChange('password', e.target.value)}}
                        />

                        <Field
                            name="r_pass"
                            placeholder="Powtórz hasło"
                            component="input"
                            onInput={ e => {this.handleRChange('r_pass', e.target.value)}}
                        />

                        <Field
                            name="email"
                            component="input"
                            placeholder="Email"
                            onInput={ e => {this.handleChange('email', e.target.value)}}
                        />

                        {/* <Field
                            name="gender"
                            component="input"
                            placeholder="Płeć"
                            onInput={ e => {this.handleChange('gender', e.target.value)}}
                        /> */}

                        <Field
                            name="phone"
                            component="input"
                            placeholder="Numer telefonu"
                            onInput={ e => {this.handleChange('phone', e.target.value)}}
                        />

                        <input type="submit" value="Wyślij mnie"></input>

                    </form>
                )}
            />
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        ip: state.global.ip,
        userData: state.data.userData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))},
       updateUser: (name,value) => {dispatch(updateUser(name,value))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserComponent);