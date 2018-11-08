import React, { Component } from "react";
import "./Chat.css";

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
            {text}
        </span>
    );
};

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    };

    render() {
        return (
            <div className="Chats" ref={this.chatRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        );
    }
}

export default Chats;