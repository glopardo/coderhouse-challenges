import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../styles';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

export default Card;