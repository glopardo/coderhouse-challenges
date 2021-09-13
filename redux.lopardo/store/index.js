import { createStore, combineReducers } from "redux";

import UsersReducer from "./reducers/users.reducer";

const RootReducer = combineReducers({
    users: UsersReducer,
});

export default createStore(RootReducer);