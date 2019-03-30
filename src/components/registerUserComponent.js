import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import '../styles/UniversalForm.scss';
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
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-wrapper">
                        <Field
                                name="name"
                                placeholder="Podaj nazwę"
                                onChange={ e => {this.handleChange('name', e.target.value)}}
                                render={({meta }) => (
                                    <input type="text" id="user" name="name" required/>
                                )}
                            />
                        <label htmlFor="user">Nazwa użytkownika</label>
                    </div>
                    <div className="input-wrapper">
                        <Field
                                name="surname"
                                placeholder="Podaj nazwę"
                                onChange={ e => {this.handleChange('surname', e.target.value)}}
                                render={({meta }) => (
                                    <input type="text" id="surname" name="surname" required/>
                                )}
                            />
                        <label htmlFor="surname">Nazwa użytkownika</label>
                    </div>
                    <div className="input-wrapper">
                        <Field
                                name="password"
                                placeholder="Podaj nazwę"
                                onChange={ e => {this.handleChange('password', e.target.value)}}
                                render={({meta }) => (
                                    <input type="text" id="password" name="password" required/>
                                )}
                            />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="input-wrapper">
                        <Field
                                name="r_pass"
                                placeholder="Podaj nazwę"
                                onChange={ e => {this.handleRChange('r_pass', e.target.value)}}
                                render={({meta }) => (
                                    <input type="text" id="r_pass" name="r_pass" required/>
                                )}
                            />
                        <label htmlFor="r_pass">Powtórz hasło</label>
                    </div>

                    <div className="input-wrapper">
                        <Field
                                name="email"
                                placeholder="Podaj nazwę"
                                onChange={ e => {this.handleChange('email', e.target.value)}}
                                render={({meta }) => (
                                    <input type="text" id="email" name="email" required/>
                                )}
                            />
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <button type="submit">Zatwierdź</button>

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