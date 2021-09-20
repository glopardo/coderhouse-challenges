import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../components/Card';
import styles from '../styles';
import COLORS from '../constants/colors';

const PrincipalScreen = () => {
    const usersFollowed = useSelector(state => state.users.list.length)

    return (
        <View>
            <Image
                source={require('../assets/images/stickman.jpg')}
                resizeMode="contain"
            />
            <Card style={styles.principalCard}>
                <Text style={styles.principalCardText}>Usuarios a los que seguís: {usersFollowed}</Text>
            </Card> 
        </View>
    );
}

export default PrincipalScreen;