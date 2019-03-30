import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences";
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';

class RegisterPreferencesComponent extends Component {

    submitForm = () => {
        this.props.updateRegisterState(0);
    }

    handleChange = (name, value) => {
        this.props.updatePreferences(name,value);
    }

    validateForm = () => {
    }

    render() {
        return (
            <div>
            <Form 
                onSubmit={this.submitForm}
                validate={this.validateForm}
                render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="profesja"
                            placeholder="Wybierz profesję"
                            component="input"
                            onInput={ e => {this.handleChange('professionId', e.target.value)}}
                        />

                        <Field
                            name="Tagi"
                            placeholder="Tagi"
                            component="input"
                            onInput={ e => {this.handleChange('tagIds', e.target.value)}}
                        />

                        <input type="submit" value="Wyślij mnie!"></input>
                    </form>
                )}
            />
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