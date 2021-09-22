import { URL_API } from "../../constants/database";

export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/user.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    name: user.name,
                })
            })

            const result = await response.json();
            dispatch({
                type: ADD_USER,
                user: {
                    id: result.name,
                    name: user.name,
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
};

export const selectUser = (userID) => ({
    type: SELECT_USER,
    userID,
});

export const removeUser = (userID) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/user/${userID}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const result = await response.json();

            dispatch({
                type: REMOVE_USER,
                userID,
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}