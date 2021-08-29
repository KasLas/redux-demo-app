import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

/* the createStoreMethod takes in two parameters
    1. reducers
    2. an initial state at this point it is an empty object
*/
export const store = createStore(reducers, {}, applyMiddleware(thunk));
