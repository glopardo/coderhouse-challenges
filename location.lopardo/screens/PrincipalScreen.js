import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from '../store/actions/users.action';

import Card from '../components/Card';
import styles from '../styles';

const PrincipalScreen = () => {
    const usersFollowed = useSelector(state => state.users.list.length)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
      }, []);

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