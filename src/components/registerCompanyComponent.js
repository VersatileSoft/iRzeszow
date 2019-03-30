import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import { Form, Field } from 'react-final-form';
import { updateCompany } from '../actions/signUpActions/updateActions/updateCompany'

class RegisterCompanyComponent extends Component {

    handleChange = (name,value) =>{
        this.props.updateCompany(name,value)
    }

    submitForm = () =>{
        this.props.updateRegisterState(3);
    }

    render() {
        return (
            <Form 
            onSubmit={this.submitForm}
            validate={this.validateForm}
            render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="companyName"
                        placeholder="Nazwa firmy"
                        component="input"
                        onInput={ e => {this.handleChange('companyName', e.target.value)}}
                    />

                    <Field
                        name="address"
                        placeholder="Podaj adres"
                        component="input"
                        onInput={ e => {this.handleChange('address', e.target.value)}}
                    />

                    <Field
                        name="phone"
                        placeholder="Nr telefonu"
                        component="input"
                        onInput={ e => {this.handleChange('phone', e.target.value)}}
                    />

                    <Field
                        name="website"
                        placeholder="Adres strony"
                        component="input"
                        onInput={ e => {this.handleChange('website', e.target.value)}}
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
        companyData: state.data.companyData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))},
       updateCompany: (name,value) => {dispatch(updateCompany(name,value))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCompanyComponent);