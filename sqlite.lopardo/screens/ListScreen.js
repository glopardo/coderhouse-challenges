import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import UserListItem from '../components/List/UserListItem';
import AddUser from '../components/List/AddUser';
import ModalDeleteUser from '../components/List/Modal';
import styles from '../styles';

import { addUser, selectUser, removeUser, loadUsers } from '../store/actions/users.action';
import { useSelector, useDispatch } from 'react-redux';

const ListScreen = () => {

    const [userInputText, setUserInputText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list)
    const selectedUser = useSelector(state => state.users.selectedID)

    const renderItem = data => <UserListItem data={data} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>

    const handleConfirmDelete = () => {
        dispatch(removeUser(selectedUser))
        dispatch(loadUsers())
        setModalVisible(false);
      };  
    
    const handleModalClose = () => {
      setModalVisible(false);
    };

    const handleModalOpen = (id) => {
      dispatch(selectUser(id));
      setModalVisible(true);
    };
    
    const handleChangeInputText = text => setUserInputText(text);
    
    const handleFollowButton = () => {
      if (userInputText) {
        dispatch(addUser(userInputText));
        dispatch(loadUsers())
        setUserInputText('');
      }
    };

    return (
        <View style={styles.listScreen}>
            <AddUser
                userInputText={userInputText}
                handleChangeInputText={handleChangeInputText}
                handleFollowButton={handleFollowButton}
            />
            <View style={styles.divider} />
            <FlatList
                data={users}
                keyExtractor={user => user.id}
                renderItem={renderItem}
            />
            <ModalDeleteUser
                modalVisible={modalVisible}
                userSelected={selectedUser}
                handleConfirmDelete={handleConfirmDelete}
                handleModalClose={handleModalClose}
            />
        </View>
    );
};

export default ListScreen;