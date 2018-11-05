import  { combineReducers } from "redux";      //Helper function to combine the reducers 
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";



export default combineReducers({
    user: user,
    contacts: contacts,
    activeUserId: activeUserId
});


