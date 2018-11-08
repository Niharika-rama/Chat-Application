//import { from } from 'rxjs';

// import  { combineReducers } from "redux";      //Helper function to combine the reducers 
// import user from "./user";
// import contacts from "./contacts";
// import activeUserId from "./activeUserId";



// export default combineReducers({
//     user: user,
//     contacts: contacts,
//     activeUserId: activeUserId
// });


export { default as contacts } from './contacts';
export { default as user } from './user';
export { default as activeUserId } from './activeUserId';
export { default as messages } from './messages';
export { default as typing} from './typing';