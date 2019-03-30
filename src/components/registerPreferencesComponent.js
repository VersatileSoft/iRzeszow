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
        mappedTags: []
    }

    componentDidMount(){
        axios.get( this.props.ip + '/Tag')
        .then(res =>{
            this.setState({
                tags: res.data
            })
            this.mapTags();
        })
        .catch(err =>{

        })
    }

    mapTags = () =>{
        let mappedTag = this.state.tags.map(tag =>
        ({
                value: tag.id, 
                label: tag.name
        }));
        this.setState({
            mappedTags: mappedTag
        })
    }

    submitForm = () => {
        console.log(this.props.userData.tagIds.map((item) => ({Id: item.value})));
        let data = {
            name: this.props.userData.name,
            surname: this.props.userData.surname,
            password: this.props.userData.password,
            gender: this.props.userData.gender,
            email: this.props.userData.email,
            professionId: this.props.userData.professionId.value,
            tagIds: this.props.userData.tagIds.map((item) => item.value)
        };
    
        axios.post(this.props.ip + '/Account/user', data)
        .then(res =>{
            this.props.updateRegisterState(0);
        })
        .catch(err =>{
            console.log(err)
        })
    }

    handleChange = (name, value) => {
        this.props.updatePreferences(name,value);
    }

    handleProfessionChange = (e) => {
        this.props.updatePreferences("professionId", e);
    }

    handleTagChange = (e) => {
        this.props.updatePreferences("tagIds", e);
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
                                    height="50px"
                                    width="50px"
                                    isMulti
                                    name="tag"
                                    options={this.state.mappedTags}
                                    onChange={this.handleTagChange}/>
                            </div>
                            <div className="input-wrapper">
                                <Select
                                    name="profession"
                                    options={[
                                        {value: 1, label: "Junior"},
                                        {value: 2, label: "Mid-level"},
                                        {value: 3, label: "Senior"},
                                    ]}
                                    
                                    onChange={this.handleProfessionChange}/>
                            </div>
                            <button type="submit">Zatwierdź</button>
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
        ip: state.global.ip,
        userData: state.data.userData
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
       updatePreferences: (name,value) => {dispatch(updatePreferences(name, value))},
       updateRegisterState: (registerState) => {dispatch(updateRegisterState(registerState))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(RegisterPreferencesComponent);