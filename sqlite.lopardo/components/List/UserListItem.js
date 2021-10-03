import React from 'react';
import { Text, Button } from 'react-native';

import COLORS from '../../constants/colors';
import styles from '../../styles';
import Card from '../Card';

const UserListItem = props => {
    const { data, handleModalOpen } = props;
    return (
        <Card style={styles.cardItem}>
          <Text style={styles.itemText}>{data.item.name}</Text>
          <Button
            title='X'
            color={COLORS.primary}
            onPress={() => handleModalOpen(data.item.id)}>
          </Button>
        </Card>
    );
};

export default UserListItem;