import React from 'react';
import "./Header.css"
import logo from "../../images/header-logo.png"
import joinLogo from "../../images/join-background.png"

const Header = () => {
    return (
        <div className={"nav"}>
            <div className={"nav-logo"}>
                <img src={logo} alt=""/>
            </div>
            <div className={"nav-menu"}>
                <b>Classes</b>
                <b>Projects</b>
                <b>Feed</b>
                <b>Search</b>
            </div>
            <div className={"nav-user"}>
                <div className={"nav-user-join"}>
                    {/*<div><img src={joinLogo} alt=""/></div>*/}
                    <b>Join Us</b>
                </div>
                <b>Log In</b>
            </div>
        </div>
    );
};

export default Header;