import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import { Form, Field } from 'react-final-form';
import { updateCompany } from '../actions/signUpActions/updateActions/updateCompany'
import Logo from '../images/logo_transparent.png';
import '../styles/UniversalForm.scss';

class RegisterCompanyComponent extends Component {

    handleChange = (name,value) =>{
        this.props.updateCompany(name,value)
    }

    submitForm = () =>{
        this.props.updateRegisterState(3);
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
                                        name="companyName"
                                        placeholder="Nazwa firmy"
                                        onInput={ e => {this.handleChange('companyName', e.target.value)}}
                                        render={({meta }) => (
                                            <input type="text" id="companyName" name="companyName" required/>
                                        )}                 
                                />
                                <label htmlFor="companyName">Nazwa Firmy</label>
                                </div>
                                <div className="input-wrapper">
                                <Field
                                    name="address"
                                    placeholder="Podaj adres"
                                    onInput={ e => {this.handleChange('address', e.target.value)}}
                                    render={({meta }) => (
                                        <input type="text" id="address" name="address" required/>
                                    )}  
                                />
                                <label htmlFor="address">Adres</label>
                                </div>
                                <div className="input-wrapper">
                                <Field
                                    name="phone"
                                    placeholder="Nr telefonu"
                                    onInput={ e => {this.handleChange('phone', e.target.value)}}
                                    render={({meta }) => (
                                        <input type="text" id="phone" name="phone" required/>
                                    )} 
                                />
                                <label htmlFor="phone">Telefon</label>
                                </div>
                                <div className="input-wrapper">
                                <Field
                                    name="website"
                                    placeholder="Adres strony"
                                    onInput={ e => {this.handleChange('website', e.target.value)}}
                                    render={({meta }) => (
                                        <input type="text" id="website" name="website" required/>
                                    )} 
                                />
                                <label htmlFor="website">Strona internetowa</label>
                                </div>
                                <button type="submit">Zatwierdź</button>

                            </form>
                        )}
                    />
            </div>
        </div>
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