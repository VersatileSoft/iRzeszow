import React, { Component } from 'react';
import '../styles/MainComponent.scss';
import { withRouter } from 'react-router'
import Logo from '../images/logo_transparent.png';

class Main extends Component {

    handleClick = () =>{
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="logo"/></a>
                    </div>
                    <div className="list">
                        <div>Start</div>
                        <div>Ustawienia</div>
                        <div>Wyloguj</div>
                    </div>
                </header>
                <section className="main-square">
                    <div>
                        content
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
                    <button onClick={this.handleClick}>Kliknij mnie!</button>
                </footer>
            </div>
        )
    }

}

export default withRouter(Main);