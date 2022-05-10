import React, { useState, useEffect } from "react";
import Header from "../Header";
import SideNav from "../SideNav";
import Message from "../Message";
import MessageInput from "../MessageInput";
import Profile from "../Profile";

function Conversation() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

            fetch("http://localhost:5000/users/getUsers", {
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Accept": "application/json"
                }
            })
                .then((response) => response.json())
                .then((responseJSON) => console.log(responseJSON))
                .catch((error) => console.log(error));

        setMessages([
            {
                from: "Michael",
                to: "Matt",
                text: "Hey, man! What's happening?",
            },
            {
                from: "Matt",
                to: "Michael",
                text: "Hey, man! What's happening?",
            },
            {
                from: "Michael",
                to: "Matt",
                text: "Hey, man! What's happening?",
            },
            {
                from: "Matt",
                to: "Michael",
                text: "Hey, man! What's happening?",
            },
            {
                from: "Michael",
                to: "Matt",
                text: "Hey, man! What's happening?",
            },
            {
                from: "Matt",
                to: "Michael",
                text: "Hey, man! What's happening?",
            },
        ]);
    }, []);

    return (
        <div className="conversation-wrapper">
            <Header />
            <div className="main-container">
                <SideNav />
                <div className="convo-container">
                    <Profile />
                    <div className="messages-container">
                        {messages.map((message) => (
                            <Message
                                messageText={message.text}
                                received={
                                    message.from === "Michael" ? false : true
                                }
                            />
                        ))}
                    </div>
                    <MessageInput />
                </div>
            </div>
        </div>
    );
}

export default Conversation;
