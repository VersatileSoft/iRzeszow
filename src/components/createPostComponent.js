import React, { Component } from 'react'
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { savePost } from '../actions/postsActions/savePosts'

import ImageUploader from 'react-images-upload';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import axios from 'axios';

import Logo from '../images/logo_transparent.png';
import '../styles/UniversalForm.scss';
import "react-datepicker/dist/react-datepicker.css";
import { Cookies } from 'react-cookie';
import image2base64 from 'image-to-base64';

class CreatePostComponent extends Component {

    state = {
        tags: [],
        mappedTags: []
    }

    componentDidMount() {
        axios.get(this.props.ip + '/Tag')
            .then(res => {
                this.setState({
                    tags: res.data
                })
                this.mapTags();
            })
            .catch(err => {

            })
    }

    mapTags = () => {
        let mappedTag = this.state.tags.map(tag =>
            ({
                value: tag.id,
                label: tag.name
            }));
        this.setState({
            mappedTags: mappedTag
        })
    }

    onDrop = (picture) => {
        console.log(picture);
        image2base64(picture[0].name)
        .then(
            (response) => {
                console.log(response)
                this.props.pendingPost.image = response
            }
        )
    }
    
    handleTagChange = (e) => {
        console.log(e)
        this.props.pendingPost.tagIds = e.map((item) => item.value);
    }

    handleFromChange = (e) => {
        this.props.pendingPost.dateFrom = e;
    }

    handleToChange = (e) => {
        this.props.pendingPost.dateTo = e;
    }

    handleTitleChange = (e) => {
        this.props.pendingPost.title = e;
    }

    handleDescriptionChange = (e) => {
        this.props.pendingPost.description = e;
    }

    handleCategoryChange = (e) => {
        this.props.pendingPost.postType = e;
    }

    handleProfessionChange = (e) => {
        console.log(e)
        this.props.pendingPost.profession = e.value;
    }

    submitForm = () => {
        console.log(this.props);

        const { cookies } = this.props;

        const config = {
            headers: {
                'Authorization': 'bearer ' + cookies.get('token')
            }
        };

        axios.post(this.props.ip + '/Post', this.props.pendingPost, config)
            .then(res => {
                this.props.sendPost(this.props.pendingPost);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const groupStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        };
        const groupBadgeStyles = {
            backgroundColor: '#EBECF0',
            borderRadius: '2em',
            color: '#172B4D',
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 'normal',
            lineHeight: '1',
            minWidth: 3,
            padding: '0.16666666666667em 0.5em',
            textAlign: 'center',
        };
        const formatGroupLabel = data => (
            <div style={groupStyles}>
                <span>{data.label}</span>
                <span style={groupBadgeStyles}>{data.options.length}</span>
            </div>
        );
        console.log(this.props);
        return (
            <div className="all">
                <div className="form-box">
                    <img src={Logo} alt="logo" />
                    <p>Utwórz</p>
                    <p>wydarzenie</p>
                    <Form
                        onSubmit={this.submitForm}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <form onSubmit={handleSubmit} className="form">
                                <div className="input-wrapper">
                                    <Field
                                        name="title"
                                        component="input"
                                        onInput={e => { this.handleTitleChange(e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="text" id="title" required />
                                        )}
                                    />
                                    <label htmlFor="title">Tytuł</label>
                                </div>
                                <div className="input-wrapper">
                                    <Field
                                        name="description"
                                        component="input"
                                        onInput={e => { this.handleDescriptionChange(e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="text" id="description" required />
                                        )}
                                    />
                                    <label htmlFor="description">Opis</label>
                                </div>
                                <div className="input-wrapper">
                                    <p>Od</p>
                                    <DatePicker
                                        selected={this.props.pendingPost.dateFrom}
                                        onChange={this.handleFromChange}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <p>Do</p>
                                    <DatePicker
                                        selected={this.props.pendingPost.dateTo}
                                        onChange={this.handleToChange}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <ImageUploader
                                        withIcon={false}
                                        accept='accept=image/png'
                                        label="Pliki .png do 5 MB"
                                        singleImage="true"
                                        buttonText='Wybierz zdjęcie'
                                        onChange={this.onDrop}
                                        imgExtension={['.png']}
                                        maxFileSize={5242880}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <Field
                                        name="postType"
                                        component="input"
                                        onInput={e => { this.handleCategoryChange(e.target.value) }}
                                        render={({ input, meta }) => (
                                            <input type="text" id="postType" required />
                                        )}
                                    />
                                    <label htmlFor="postType">Kategoria</label>
                                </div>
                                <div className="input-wrapper">
                                    <p>Podaj swoje zainteresowania</p>
                                    <Select
                                        formatGroupLabel={formatGroupLabel}
                                        name="profession"
                                        isMulti
                                        name="tag"
                                        options={this.state.mappedTags}
                                        onChange={this.handleTagChange} />
                                </div>
                                <div className="input-wrapper">
                                    <p>Podaj swój staż</p>
                                    <Select
                                        formatGroupLabel={formatGroupLabel}
                                        name="profession"
                                        options={[
                                            { value: 1, label: "Junior" },
                                            { value: 2, label: "Mid-level" },
                                            { value: 3, label: "Senior" },

                                        ]}

                                        onChange={this.handleProfessionChange} />
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

const mapStateToProps = (state) => {
    return {
        pendingPost: state.holdPosts.pendingPost,
        ip: state.global.ip
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        savePost: (value) => { dispatch(savePost(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostComponent);