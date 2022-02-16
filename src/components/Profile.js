import React, { useState, useEffect } from "react";
import profilePic from "../img/person.png";

function Profile(props) {

    const [friend, setFriend] = useState({});

    useEffect(() => {
        setFriend({
            name: "Matt Hintze",
            imageURL: "../img/person.png"
        });
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-pic-wrapper">
                <img src={profilePic} alt="profile-pic" />
            </div>
            <div className="profile-name">{friend.name}</div>
        </div>
    );
}

export default Profile;
