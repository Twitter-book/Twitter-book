import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="login">
                    <img src={logo} alt="logo" className="landingLogo" />
                    <h1>Welcome to TwitterBook</h1>
                    <a href={process.env.REACT_APP_LOGIN}><button className="loginButton">Login / Signup</button></a>
                    <a href="https://youtu.be/NZpiNxxMy1E" style={{ textDecoration: 'none', color: 'black' }} target="_blank" className="videoWalk">Video Walkthrough</a>
                </div>
            </div>
        )
    }
}
export default Landing;