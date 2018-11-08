import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../actions/constants/action-types";
import _ from 'lodash';

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
        const { message, userId } = action.payload;
        const allUserMsg = state[userId];
        const number =  +_.keys(allUserMsg).pop() + 1  //+ in the front to makesure number is converted to Number instead of a String
        return {
            ...state,
            [userId]:{
                ...allUserMsg ,
            [number] : {
                number,
                text: message,
                is_user_msg: true
                }
            }
        };  
        default:
            return state;
    }

}