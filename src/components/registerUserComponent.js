import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import '../styles/UniversalForm.scss';
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import { updateUser } from '../actions/signUpActions/updateActions/updateUser';
import Switch from 'react-switch';
import Logo from '../images/logo_transparent.png';

class RegisterUserComponent extends Component {

    state = {
        r_pass: '',
        isMale: false,
        isCompany: false
    }

    submitForm = () => {
        console.log(this.props.userData)
        if (this.state.isCompany) {
            this.props.updateRegisterState(2)
        } else {
            this.props.updateRegisterState(3)
        }

    }

    handleGenderChange = () => {
        this.handleChange("gender", (!this.state.isMale) ? 1 : 0);
        this.setState({
            isMale: !this.state.isMale
        });
    }

    handleCompanyChange = () => {
        this.setState({
            isCompany: !this.state.isCompany
        });
    }

    handleChange(name, value) {
        this.props.updateUser(name, value)
    }

    handleRChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    validateForm() {
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
                            <form onSubmit={handleSubmit} className="form">
                                <div className="input-wrapper">
                                    <Field
                                        name="name"
                                        component="input"
                                        onInput={e => { this.handleChange('name', e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="text" id="user" required />
                                        )}
                                    />
                                    <label htmlFor="user">Imię</label>
                                </div>
                                <div className="input-wrapper">
                                    <Field
                                        name="surname"
                                        component="input"
                                        onInput={e => { this.handleChange('surname', e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="text" id="surname" required />
                                        )}
                                    />
                                    <label htmlFor="surname">Nazwisko</label>
                                </div>
                                <div className="input-wrapper">
                                    <Field
                                        name="password"
                                        component="input"
                                        type="password"
                                        onInput={e => { this.handleChange('password', e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="password" id="password" required />
                                        )}
                                    />
                                    <label htmlFor="password">Hasło</label>
                                </div>

                                <div className="input-wrapper">
                                    <Field
                                        name="r_pass"
                                        component="input"
                                        type="password"
                                        onInput={e => { this.handleRChange('r_pass', e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="password" id="r_pass" required />
                                        )}
                                    />
                                    <label htmlFor="r_pass">Powtórz hasło</label>
                                </div>


                                <div className="input-wrapper">
                                    <Field
                                        name="email"
                                        component="input"
                                        onInput={e => { this.handleChange('email', e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="text" id="email" required />
                                        )}
                                    />
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <div className="switches">
                                    <div className="input-wrapper">
                                        <a className="m">Mężczyzna</a>
                                        <Switch onChange={this.handleGenderChange} checked={this.state.isMale} />
                                        <a className="k">Kobieta</a>
                                    </div>

                                    <div className="input-wrapper">
                                        <a className="company_question">Czy chcesz założyć konto firmowe</a>
                                        <Switch onChange={this.handleCompanyChange} checked={this.state.isCompany} />
                                    </div>
                                </div>
                                <div class="submits">
                                 <button type="submit">Zatwierdź</button>
                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ip: state.global.ip,
        userData: state.data.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateRegisterState: (registerState) => { dispatch(updateRegisterState(registerState)) },
        updateUser: (name, value) => { dispatch(updateUser(name, value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserComponent);