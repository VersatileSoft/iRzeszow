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

    state = {
        data:null
    }

    handleClick = () => {
        this.props.history.push('/register')
    }

    componentDidMount() {
        const { cookies } = this.props;
        const config = {
            headers: {
                'Authorization': 'bearer ' + cookies.get('token')
            }
        };
        axios.get(this.props.ip + '/Post', config)
            .then(res => {
                console.log("this")
                console.log(res.data)
                this.props.savePosts(res.data)
                this.setState({data: res.data})
            })
    }

    logOut = () =>{
        const { cookies } = this.props
        cookies.remove('token')
        if(cookies.get('token') === undefined){
            this.props.history.push('/')
        }
    }

    hasPosts() {
        console.log(this.state)
        return this.state.data != null;
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
        console.log("aa")
        console.log(this.props)
        return (
            <div>
                <header>
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="logo" /></a>
                    </div>
                    <div className="list">
                        <div>Start</div>
                        <div>Ustawienia</div>
                        <div onClick={this.logOut}>Wyloguj</div>
                    </div>
                </header>
                <section className="main-square" id="0">
                    { (this.hasPosts()) ? <SinglePost data={ this.props.posts[0][0]}/> : <div/>}
                </section>
                <section className="lower-squares" >
                    <div className="middle-square" id="1">
                        { (this.hasPosts()) ? <SinglePost data={ this.props.posts[0][1]}/> : <div/>}
                    </div>
                    <div className="rest">
                        <div className="adv" id="2">
                            { (this.hasPosts()) ? <SinglePost data={ this.props.posts[0][2]}/> : <div/>}
                        </div>
                        <div className="smallest-squares">
                            <div className="smallest-square-1" id="3">
                                { (this.hasPosts()) ? <SinglePost data={ this.props.posts[0][3]}/> : <div/>}
                            </div>
                            <div className="smallest-square-2" id="4">
                                { (this.hasPosts()) ? <SinglePost data={ this.props.posts[0][4]}/> : <div/>}
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    Created and Designeed by First Order Team #Hackathon2019
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