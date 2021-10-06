import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

import COLORS from '../../constants/colors';
import styles from '../../styles';

const ModalDeleteUser = props => {
    const {modalVisible, handleConfirmDelete, handleModalClose} = props;
    const userIDSelected = useSelector(state => state.users.selectedID);
    const userSelected = useSelector(state => state.users.list.find(user => user.id === userIDSelected))

    const userName = userSelected !== undefined ? userSelected.name : ""
    return (
        <Modal animationType='slide' visible={modalVisible}>
            <View>
                <Text style={styles.modalHeader}>Dejar de seguir</Text>
            </View>
            <View>
                <Text style={styles.modalText}>¿Está seguro que desea dejar de seguir a {userName}?</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <View style={styles.modalButton}>
                    <Button color={COLORS.primary} title='CONFIRMAR' onPress={() => handleConfirmDelete()}/>
                </View>
                <View style={styles.modalButton}>
                    <Button color={COLORS.accent} title='CANCELAR' onPress={() => handleModalClose()}/>
                </View>
            </View>
            
        </Modal>
    );
};

export default ModalDeleteUser;