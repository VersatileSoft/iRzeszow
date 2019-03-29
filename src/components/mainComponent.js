import React, { Component } from 'react';

import '../styles/MainComponent.scss';
import Logo from '../images/logo_transparent.png';

class Main extends Component {

    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src={Logo} alt="logo"/>
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
                </footer>
            </div>
        )
    }

}

export default Main;