import React, { Component } from 'react';
import '../styles/MainComponent.scss';
import { withRouter } from 'react-router'
import Logo from '../images/logo_transparent.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { savePosts } from '../actions/postsActions/savePosts';

class Main extends Component {

    handleClick = () => {
        this.props.history.push('/register')
    }

    componentDidMount() {
        axios.get(this.props.ip + '/Post')
            .then(res => {
                this.props.savePosts(res.data)
            })
            .catch(err => {

            })
    }


    render() {


        let mappedPosts = this.props.posts.map(post => {
            return (
                <div key={post.image}>
                    <h2>{post.title}</h2>
                    <p>{post.type}</p>
                </div>
            )
        })

        return (
            <div>
                <header>
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="logo" /></a>
                    </div>
                    <div className="list">
                        <div>Start</div>
                        <div>Ustawienia</div>
                        <div>Wyloguj</div>
                    </div>
                </header>
                <section className="main-square">
                    <div>
                        {mappedPosts}
                    </div>
                </section>
                <section className="lower-squares">
                    <div className="middle-square">
                        content
                    </div>
                    <div className="rest">
                        <div className="adv">
                            adv
                        </div>
                        <div className="smallest-squares">
                            <div className="smallest-square-1">
                                content
                            </div>
                            <div className="smallest-square-2">
                                content
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    content
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ip: state.global.ip,
        posts: state.holdPosts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePosts: (postsArray) => { dispatch(savePosts(postsArray)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));