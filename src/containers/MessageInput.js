import React from "react";
import "./MessageInput.css";
import { setTypingValue, sendMessage } from "../actions";
import store from "../store";


const MessageInput = ({ value }) => {
    const state = store.getState();
    const handelChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };
    console.log('value---- ', value);
    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    } 
    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input className="Message__input"
                onChange={handelChange}
                value={value}
                placeholder="Write a message"
            />
        </form>
    );
};




export default MessageInput;