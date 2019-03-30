import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences";
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import '../styles/UniversalForm.scss';
import Logo from '../images/logo_transparent.png';

class RegisterPreferencesComponent extends Component {

    submitForm = () => {
        this.props.updateRegisterState(0);
    }

    handleChange = (name, value) => {
        this.props.updatePreferences(name,value);
    }

    validateForm = () => {
        console.log("BB");
    }

    render() {
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
                                        name="name"
                                        placeholder="Podaj nazwę"
                                        onChange={ e => {this.handleChange('name', e.target.value)}}
                                        render={({meta }) => (
                                            <input type="text" id="user" name="name" required/>
                                        )}
                                    />
                                <label for="user">Nazwa użytkownika</label>
                            </div>
                            <div class="input-wrapper">
                                <Field
                                        name="password"
                                        placeholder="Podaj nazwę"
                                        onChange={ e => {this.handleChange('name', e.target.value)}}
                                        render={({meta }) => (
                                            <input type="text" id="password" name="password" required/>
                                        )}
                                    />
                                <label for="password">Password</label>
                            </div>

                            <div class="input-wrapper">
                                <Field
                                        name="repeat-password"
                                        placeholder="Podaj nazwę"
                                        onChange={ e => {this.handleChange('name', e.target.value)}}
                                        render={({meta }) => (
                                            <input type="text" id="repeat-password" name="repeat-password" required/>
                                        )}
                                    />
                                <label for="repeat-password">Powtórz hasło</label>
                            </div>

                            <div class="input-wrapper">
                                <Field
                                        name="mail"
                                        placeholder="Podaj nazwę"
                                        onChange={ e => {this.handleChange('name', e.target.value)}}
                                        render={({meta }) => (
                                            <input type="text" id="mail" name="mail" required/>
                                        )}
                                    />
                                <label for="mail">E-mail</label>
                            </div>

                            <Field
                                name="submit"
                                onChange={this.handleChange}
                                render={({meta }) => (
                                    <button type="submit">Zatwierdź</button>
                                )}
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
        ip: state.global.ip
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
       updatePreferences: (name,value) => {dispatch(updatePreferences(name, value))},
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(RegisterPreferencesComponent);