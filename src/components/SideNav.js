import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            {friends.map((friend, index) => (<Link to="/messages" key={index}>
                <div className="contact">{friend}</div>
            </Link>))}
        </div>
    );
}

export default SideNav;
