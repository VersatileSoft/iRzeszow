import React, { Component } from 'react';
import '../styles/MainComponent.scss';
import { withRouter } from 'react-router'
import Logo from '../images/logo_transparent.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { savePosts } from '../actions/postsActions/savePosts';
import { withCookies } from 'react-cookie';
import SinglePost from './singlePost';

class Main extends Component {

    handleClick = () => {
        this.props.history.push('/register')
    }

    componentDidMount() {
        axios.get(this.props.ip + '/Post')
            .then(res => {
                this.props.savePosts(res.data)
            }).then(() => {
                console.log("aa")
                for (let i = 0; i < 5; i++) {
                    this.refs[i].innerHTML = <SinglePost data={this.props.posts[i]}/>;
                }
            })
    }

    logOut = () =>{
        const { cookies } = this.props
        cookies.remove('token')
        if(cookies.get('token') === undefined){
            this.props.history.push('/')
        }
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
                        <a href="/home"><img src={Logo} alt="logo" /></a>
                    </div>
                    <div className="list">
                        <div>Start</div>
                        <div>Ustawienia</div>
                        <div onClick={this.logOut}>Wyloguj</div>
                    </div>
                </header>
                <section className="main-square" id="0">
                    <div>
                        {mappedPosts}
                    </div>
                </section>
                <section className="lower-squares" >
                    <div className="middle-square" id="1"/>
                    <div className="rest">
                        <div className="adv" id="2"/>
                        <div className="smallest-squares">
                            <div className="smallest-square-1" id="3"/>
                            <div className="smallest-square-2" id="4"/>
                        </div>
                    </div>
                </section>
                <footer>
                    Hackerz 2k19
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

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(withRouter(Main)));