import React, { Component } from 'react';

import '../styles/MainComponent.scss';

class Main extends Component {

    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        iRzeszow
                    </div>
                    <div className="list">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
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