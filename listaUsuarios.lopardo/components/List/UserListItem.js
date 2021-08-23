import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles';

const UserListItem = props => {
    const { data, handleModalOpen } = props;
    return (
        <View style={styles.item}>
          <Text style={styles.itemText}>{data.item.value}</Text>
          <Button
            title='X'
            color='#40476d'
            onPress={() => handleModalOpen(data.item.id)}>
          </Button>
        </View>
    );
};

export default UserListItem;