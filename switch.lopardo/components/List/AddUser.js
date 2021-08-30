import React from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from '../../styles';

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
          color='#08415c'
          onPress={handleFollowButton}
        />
      </View>
    );
};

export default AddUser;