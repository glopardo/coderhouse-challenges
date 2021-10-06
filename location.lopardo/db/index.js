import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('emprende.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL
                )`,
            [], // 
            () => resolve(),
            (_, err) => reject(err),
            )
        })
    })

    return promise
}

export const insertUser = (
    name,
) => {
    return new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO user (name)
                VALUES (?)`,
                [name],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
}

export const fetchUsers = () => {
    return new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM user',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
}

export const deleteUser = (id) => {
    return new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM user WHERE id=?',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
}