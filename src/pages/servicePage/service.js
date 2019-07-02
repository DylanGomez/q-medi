import React, { Component } from 'react';
import logo from "../../images/q-medi-logo.png"


class Service extends Component {

    render(){
        return (
            <div>
                 <div className="wrapper">
                    <div className="upperDiv">
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div className="lowerDiv">Tekst</div>
                </div>
            </div>
        )
    }
}

export default Service