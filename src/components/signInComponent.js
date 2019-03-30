import React, { Component } from 'react';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import { updateLogInData } from '../actions/signInActions/updateLogInData';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../styles/UniversalForm.scss';
import Logo from '../images/logo_transparent.png';

class SignIn extends Component {

    handleChange = (name, value) =>{
        this.props.updateLogInData(name,value)
    }

    submitForm = () =>{
        axios.post( this.props.ip + '/Auth',  this.props.signIn)
        .then(res =>{
            this.props.history.push('/')
        })
        .catch(err =>{

        })
    }

    render(){
        console.log(this.props.signIn)
        return(
            <div className="all">
                <div className="form-box">
                    <img src={Logo} alt="logo" />
                    <p>Zaloguj</p>
                    <p>się</p>
                        <Form 
                        onSubmit={this.submitForm}
                        validate={this.validateForm}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                <div className="input-wrapper">
                                        <Field
                                            name="email"
                                            placeholder="Email"
                                            component="input"
                                            onInput={ e => {this.handleChange('email', e.target.value)}}
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <Field
                                            name="password"
                                            placeholder="Hasło"
                                            component="input"
                                            onInput={ e => {this.handleChange('password', e.target.value)}}
                                        />
                                    </div>
                                    <p>Zapomniałeś hasła?</p>
                                    <div class="submits">
                                        <button type="submit" class="registration-button">Rejestracja</button>
                                        <button type="submit" >Zatwierdź</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    />
                </div>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        ip: state.global.ip,
        signIn: state.signIn.logInData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updateLogInData: (name,value) => {dispatch(updateLogInData(name,value))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));