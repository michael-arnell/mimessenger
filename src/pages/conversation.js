import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import Profile from "../components/Profile";

function Conversation() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
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
                                    message.from == "Michael" ? false : true
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
