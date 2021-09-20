import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import UsersReducer from "./reducers/users.reducer";

const RootReducer = combineReducers({
    users: UsersReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));