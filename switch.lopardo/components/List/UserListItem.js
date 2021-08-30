import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../../styles';
import Card from '../Card';

const UserListItem = props => {
    const { data, handleModalOpen } = props;
    return (
        <Card style={styles.cardItem}>
          <Text style={styles.itemText}>{data.item.value}</Text>
          <Button
            title='X'
            color='#dd6e42'
            onPress={() => handleModalOpen(data.item.id)}>
          </Button>
        </Card>
    );
};

export default UserListItem;