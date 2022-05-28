
function MessageInput() {

    const sendMessage = () => {
        
    }

    return (
        <div className="message-input">
            <form onSubmit={sendMessage} method="post">
            <textarea>

            </textarea>
            <button class="submit" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default MessageInput;