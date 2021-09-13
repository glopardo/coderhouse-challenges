export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (user) => ({
    type: ADD_USER,
    user: {
        id: user.id,
        name: user.name,
    }
});

export const selectUser = (userID) => ({
    type: SELECT_USER,
    userID,
});

export const removeUser = (userID) => ({
    type: REMOVE_USER,
    userID,
})