import { createStore } from "redux";
import reducer from "../reducers/contacts";

const store = createStore(reducer); //In real world applications the initial state here comes from the server side

export default store;
