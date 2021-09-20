import { ADD_USER, REMOVE_USER, SELECT_USER } from "../actions/users.action";

const initialState = {
    list: [],
    selectedUser: null,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            state.list.push(action.user)
            return {
                ...state,
            }
        case SELECT_USER:
            return {
                ...state,
                selectedID: action.userID,
            }
        case REMOVE_USER:
            return{
                ...state,
                list: state.list.filter(user => user.id !== action.userID)
            }
        default:
            return state;
    }
}

export default UsersReducer;