import React from 'react';
import styles from '../styles';
import { View, Button, TextInput } from 'react-native';

const AddUser = props => {
    const { userInputText, handleChangeInputText, handleFollowButton } = props;
    return (
        <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Buscar usuario..."
          onChangeText={handleChangeInputText}
          value={userInputText}
        />
        <Button
          title="+"
          color='#dd614a'
          onPress={handleFollowButton}
        />
      </View>
    );
};

export default AddUser;