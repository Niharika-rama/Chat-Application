import { SET_TYPING_VALUE, SEND_MESSAGE } from "../actions/constants/action-types";

export default function setTypingValue(state = "", action) {
    console.log('action from typing', action.type);
    switch (action.type) {
       case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
        console.log('typing', action.payload);
            return "";
        default:
            return state;
    }
}