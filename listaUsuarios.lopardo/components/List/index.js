import React from 'react';
import { FlatList } from 'react-native';
import UserListItem from './UserListItem';

const UsersList = props => {
    const { usersList, handleModalOpen, handleModalClose } = props;
    const renderItem = data => <UserListItem data={data} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>
    return (
        <FlatList
            data={usersList}
            keyExtractor={user => user.id}
            renderItem={renderItem}
        />
    );
};

export default UsersList;