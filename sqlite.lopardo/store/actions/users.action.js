import { insertUser, fetchUsers, deleteUser } from "../../db";

export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOAD_USERS = 'LOAD_USERS';

export const addUser = (userName) => {
    console.log('addUser.userName: ', userName)
    return async dispatch => {
        try {
            const result = await insertUser(
                userName,
            )
            console.log('addUser.result: ', result)
            dispatch({
                type: ADD_USER,
                payload: {
                    id: result.insertId,
                    name: userName,
                }
            })
        } catch (err) {
            console.log(err.message);
            throw err;
        }
    }
};

export const removeUser = (id) => {
    console.log('removeUser.id: ', id)
    return async dispatch => {
        try {
            const result = await deleteUser(
                id,
            )
            dispatch({
                type: DELETE_USER,
            })
        } catch (err) {
            console.log(err.message);
            throw err;
        }
    }
};

export const loadUsers = () => {
    return async dispatch => {
        try {
            const result = await fetchUsers();
            dispatch({
                type: LOAD_USERS,
                users: result.rows._array
            })
        } catch (error) {
            throw error;
        }
    }
}

export const selectUser = (userID) => ({
    type: SELECT_USER,
    userID,
});
