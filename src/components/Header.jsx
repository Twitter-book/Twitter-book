import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../ducks/reducer'
import axios from 'axios';
import logo from '../images/logo.svg'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            HamAnimation: true,
            HamClose: false,
        }
    }
    async componentDidMount() {
        await this.props.getUserInfo()
        axios.get("/api/twitter").then(res => {
            this.setState({
                user: res.data.data[0].user
            })
        })
    }
    hamMenuSlide() {
        this.setState({
            HamAnimation: this.state.HamAnimation ? false : true
        })
    }
    render() {

        let image = this.state.user.profile_image_url ? this.state.user.profile_image_url.replace('normal', '400x400') : null

        return (
            <div>
                <div className="header">
                    <Link to="/home"><img src={logo} alt="logo" className="logo" /></Link>
                    <div className="headerProfileImgContainer">
                        <Link to="/account"><img src={image} className="headerProfileImg" alt="profile pic" /></Link>
                    </div>
                    <div className="hamMenuContainerDiv">
                        <div className={ this.state.HamAnimation ? "hamMenuContainer" : "hamMenuContainer HamSlide"}>
                            <div className={this.state.HamAnimation ? "hamMenu" : "hamMenu HamSlide"} onClick={() => this.hamMenuSlide()}>
                                <div className="hamLine one"></div>
                                <div className="hamLine two"></div>
                                <div className="hamLine three"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.HamAnimation ? "menuLinks" : "menuLinks slideLeft"}>
                    <Link to="/home" style={{ textDecoration: 'none' }} className="link H"><div onClick={() => this.hamMenuSlide()}>Home</div></Link>
                    <Link to="/newbook" style={{ textDecoration: 'none' }} className="link"><div onClick={() => this.hamMenuSlide()}>Create a Book</div></Link>
                    <Link to="/account" style={{ textDecoration: 'none' }} className="link"><div onClick={() => this.hamMenuSlide()}>Account</div></Link>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }

}
export default connect(mapStateToProps, { getUserInfo })(Header);