import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { TextField } from 'react-final-form-antd';
import { Input } from 'antd';
import CustomField from './CustomField';
import { updatePreferences } from '../actions/signUpActions/updateActions/'

class RegisterPreferencesComponent extends Component {

    submitForm = () => {
        console.log("CCA");
    }

    handleChange = () => {
        
    }

    validateForm = () => {
        console.log("BB");
    }

    render() {
        return (
            <Form 
                onSubmit={this.submitForm}
                validate={this.validateForm}
                render={({ handleSubmit, pristine, invalid }) => (
                    <CustomField
                        name={"Podaj nazwę"}
                        component={TextField}
                        onChange={ e => {this.handleChange('name', e.target.value)}}
                    >

                    </CustomField>
                )}
            />
        );
    }

}

const mapStateToProps = (state) =>{
    return{
        preferencesData: state.preferences.preferencesData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       updatePreferences: (name,value) => {dispatch(updatePreferences(name, value))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(RegisterPreferencesComponent);