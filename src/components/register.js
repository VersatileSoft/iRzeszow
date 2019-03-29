import React, { Component } from 'react';

import '../styles/register.scss';

class SignBaseComponent extends Component {

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
                        
                        </div>
                        <div className="smallest-squares">
                        
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default SignBaseComponent;