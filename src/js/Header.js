import React from "react";
import '../css/Header.css';
import logo from '../img/logo.jpg'
import noti from '../img/noti.jpg'
import prof from '../img/profile.png'

function Header(){
    return(
        <div className="MainHead">
            <div className="logoimg">
                <img src={logo} alt="no"/>
            </div>
            <div className="middle">
                <h1 className="CaptionHeading">Event Management</h1>
            </div>
            <div className="rightHead">
                <div className="icon">
                    <img src={noti} alt="no"/>
                </div>
                <div className="icon">
                    <img src={prof} alt="no"/>
                </div>
            </div>
        </div>
    )
}

export {Header};