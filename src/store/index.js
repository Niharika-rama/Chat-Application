import { createStore } from "redux";
import * as reducers from "../reducers";
import { combineReducers} from "redux";

const store = createStore(combineReducers({
    ...reducers,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
//In real world applications the initial state here comes from the server side

// + /* eslint-disable no-underscore-dangle */
//   const store = createStore(combineReducers({
//     ...reducers, /* preloadedState, */
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   }));
// + /* eslint-enable */
export default store;
