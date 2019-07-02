import React, { Component } from 'react';
import "./header.scss";
import {
    NavLink
} from 'react-router-dom'


class Header extends Component {

    render() {
        return (
                <div className="header">
                    <div className="options-div">
                        <div className="options">
                            <div className="link-wrapper"><NavLink to="/home" className="link" activeClassName='active'>Home</NavLink></div>
                            <div className="link-wrapper"><NavLink to="/courier" className="link" activeClassName='active'>Courier</NavLink></div>
                            <div className="link-wrapper"><NavLink to="/services" className="link" activeClassName='active'> Diensten</NavLink></div>
                            <div className="link-wrapper"><NavLink to="/contact" className="link" activeClassName='active'>Contact</NavLink></div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Header