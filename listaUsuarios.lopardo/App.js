import React, { useState } from 'react';
import { View } from 'react-native';
import AddUser from './components/AddUser';
import UsersList from './components/List';
import Modal from './components/Modal';
import Header from './components/Header'
import styles from './styles';

export default function App() {
  const [userInputText, setUserInputText] = useState('');
  const [usersList, setUsersList] = useState([]);

  const [userSelected, setUserSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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
    <View style={styles.screen}>
      <Header />
      <AddUser
        userInputText={userInputText}
        handleChangeInputText={handleChangeInputText}
        handleFollowButton={handleFollowButton}
      />
      <View style={styles.divider} />
      <UsersList
        usersList={usersList}
        handleModalOpen={handleModalOpen}
      />
      <Modal
        modalVisible={modalVisible}
        userSelected={userSelected}
        handleConfirmDelete={handleConfirmDelete}
        handleModalClose={handleModalClose}
      />
    </View>
  );
}
