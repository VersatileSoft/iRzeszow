import React, { Component } from 'react';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import { updateLogInData } from '../actions/signInActions/updateLogInData';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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
        return(
            <Form 
            onSubmit={this.submitForm}
            validate={this.validateForm}
            render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        placeholder="Email"
                        component="input"
                        onInput={ e => {this.handleChange('email', e.target.value)}}
                    />

                    <Field
                        name="password"
                        placeholder="Hasło"
                        component="input"
                        onInput={ e => {this.handleChange('password', e.target.value)}}
                    />

                    <input type="submit" value="Wyślij mnie"></input>
                </form>
            )}
        />
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