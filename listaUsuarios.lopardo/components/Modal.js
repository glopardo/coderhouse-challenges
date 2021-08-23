import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import styles from '../styles';

const ModalDeleteUser = props => {
    const {modalVisible, userSelected, handleConfirmDelete, handleModalClose} = props;
    return (
        <Modal animationType='slide' visible={modalVisible}>
            <View>
                <Text style={styles.modalHeader}>Dejar de seguir</Text>
            </View>
            <View>
                <Text style={styles.modalText}>¿Está seguro que desea dejar de seguir a {userSelected.value}?</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <View style={styles.modalButton}>
                    <Button color='#6d9dc5' title='CONFIRMAR' onPress={() => handleConfirmDelete()}/>
                </View>
                <View style={styles.modalButton}>
                    <Button color='#dd614a' title='CANCELAR' onPress={() => handleModalClose()}/>
                </View>
            </View>
            
        </Modal>
    );
};

export default ModalDeleteUser;