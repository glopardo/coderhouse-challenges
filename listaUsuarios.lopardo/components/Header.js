import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Lista de usuarios a los que seguís</Text>
        </View>
    );
};

export default Header;