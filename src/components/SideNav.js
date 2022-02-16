import React, { useState, useEffect } from "react";

function SideNav() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        setFriends([
            "Matt Hintze",
            "Megan Moreno",
            "Katie Arnell",
            "Kelly Peterson",
        ]);
    }, []);

    return (
        <div className="contacts-container">
            {friends.map((friend) => <div className="contact">{friend}</div>)}
        </div>
    );
}

export default SideNav;
