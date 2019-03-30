import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { Form } from 'react-final-form';
import Select from 'react-select';
import { updatePreferences } from "../actions/signUpActions/updateActions/updatePreferences";
import { updateRegisterState } from '../actions/signUpActions/updateActions/updateRegisterState';
import '../styles/UniversalForm.scss';
import Logo from '../images/logo_transparent.png';

class RegisterPreferencesComponent extends Component {

    state = {
        tags: [],
        mappedTags: null
    }

    componentDidMount(){
        axios.get( this.props.ip + '/Tag')
        .then(res =>{
            console.log(res.data);
            this.setState({
                tags: res.data
            })
        })
        .catch(err =>{

        })
    }

    mapTags = () =>{
        const mappedTags  = this.state.tags.map(tag =>{
                value: tag.id; 
                label: tag.name
        })
        this.setState({
            mappedTags
        })
    }

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
            <div className="all">
            <div className="form-box">
             <img src={Logo} alt="logo" />
                    <p>Zarejestruj</p>
                    <p>się</p>
                <Form 
                    onSubmit={this.submitForm}
                    validate={this.validateForm}
                    render={({ handleSubmit, pristine, invalid }) => (
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                            <Select
                                isMulti
                                name="colors"
                                options={this.state.mappedTags}/>
                             </div>
                        </form>
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