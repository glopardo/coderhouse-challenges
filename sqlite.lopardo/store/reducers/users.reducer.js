import { ADD_USER, LOAD_USERS, DELETE_USER, SELECT_USER } from "../actions/users.action";
import User from '../../models/User';

const initialState = {
    list: [],
    selectedUser: null,
}

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            const newUser = new User(
                action.payload.id,
                action.payload.name,
            );
            return {
                ...state,
                list: state.list.concat(newUser),
            };
        case LOAD_USERS:
            return {
                ...state,
                list: action.users.map(item => new User(
                    item.id,
                    item.name,
                ))
            }
        case SELECT_USER:
            return {
                ...state,
                selectedID: action.userID,
            }
        case DELETE_USER:
            console.log('DELETE_USER: ', action.list)
            return {
                ...state,
                list: state.list.filter(user => user.id !== action.userID)
            }
        default:
            return state;
    }
}

export default UsersReducer;