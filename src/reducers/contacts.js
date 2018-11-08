import { contacts } from "../static-data";


export default function contactsFromData(state = {contacts}, action){
    return state;
};

// function activeUserId(state= null, action){
//     return state;
// };
// function user(state= generateUser(), action){
//     return state;
// };

// export default combineReducers({
//     // user: user,
//     contacts: contactsFromData,
//     activeUserId: activeUserId
// });