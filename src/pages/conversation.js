import React from "react";
import profile_pic from "../img/person.png"
import Header from "../components/Header"
import SideNav from "../components/SideNav"

function Conversation() {
    return (
        <div className="conversation-wrapper">
            <Header/>
                <div className="main-container">
                    <SideNav/>
                    <div className="convo-container">
                        <div className="profile-container">
                            <div className="profile-pic-wrapper">
                                <img src={profile_pic} alt="profile-pic" />
                            </div>
                            <div className="profile-name">
                                Matt Hintze
                            </div>
                        </div>
                        <div className="messages-container">
                            <div className="message-wrapper">
                                <div className="message">
                                    Hey bro, what's crackin?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Conversation;