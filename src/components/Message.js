import { useState, useEffect } from "react";

function Message(props) {

    // const [messageText, setMessageText] = useState("");

    return (
        <div className={props.received ? "message-wrapper received" : "message-wrapper"}>
            <div className="message">
                {props.messageText}
            </div>
        </div>
    )
}

export default Message;