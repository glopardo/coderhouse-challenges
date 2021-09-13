import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../components/Card';
import styles from '../styles';
import COLORS from '../constants/colors';

const PrincipalScreen = ({ navigation }) => {
    const usersFollowed = useSelector(state => state.users.list.length)

    const handleButtonPressed = () => {
        navigation.navigate('Seguidos')
    }
    return (
        <View>
            <Image
                source={require('../assets/images/stickman.jpg')}
                resizeMode="contain"
            />
            <Card style={styles.principalCard}>
                <Text style={styles.principalCardText}>Usuarios a los que seguís: {usersFollowed}</Text>
                <Button title='Ver lista' onPress={handleButtonPressed} color={COLORS.primary}/>
            </Card> 
        </View>
    );
}

export default PrincipalScreen;