import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import UserListItem from '../components/List/UserListItem';
import AddUser from '../components/List/AddUser';
import ModalDeleteUser from '../components/List/Modal';
import styles from '../styles';

const ListScreen = () => {

    const [userInputText, setUserInputText] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [userSelected, setUserSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = data => <UserListItem data={data} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>

    const handleConfirmDelete = () => {
        setUsersList(usersList.filter(user => user.id !== userSelected.id));
        setUserSelected({});
        setModalVisible(false);
      };  
    
    const handleModalClose = () => {
    setUserSelected({});
    setModalVisible(false);
    };

    const handleModalOpen = (id) => {
    setUserSelected(usersList.find(user => user.id === id));
    setModalVisible(true);
    };
    
    const handleChangeInputText = text => setUserInputText(text);
    
    const handleFollowButton = () => {
      if (userInputText) {
        setUsersList([
          ...usersList,
          {
            id: Math.random().toString(),
            value: userInputText,
          },
        ]);
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
                data={usersList}
                keyExtractor={user => user.id}
                renderItem={renderItem}
            />
            <ModalDeleteUser
                modalVisible={modalVisible}
                userSelected={userSelected}
                handleConfirmDelete={handleConfirmDelete}
                handleModalClose={handleModalClose}
            />
        </View>
    );
};

export default ListScreen;