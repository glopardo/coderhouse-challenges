import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import Card from '../components/Card';
import styles from '../styles';

const PrincipalCreen = (props) => {
    const { showMain } = props;

    return (
        <View>
            <View>
                <Text style={styles.principalHeader}>Tu perfil</Text>
            </View>
            <View style={styles.divider} />
            <Image
                source={require('../assets/images/stickman.jpg')}
                resizeMode="contain"
                style={styles.image}
            />
            <Card style={styles.principalCard}>
                <Text style={styles.principalCardText}>Usuarios a los que seguís</Text>
                <Button title='Ver lista' onPress={() => {showMain(false)}}/>
            </Card> 
        </View>
    );
}

export default PrincipalCreen;