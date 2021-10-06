import React from 'react';
import { View, Button, TextInput } from 'react-native';

import styles from '../../styles';
import COLORS from '../../constants/colors'

const AddUser = props => {
    const { userInputText, handleChangeInputText, handleFollowButton } = props;
    return (
        <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Agregar usuario..."
          onChangeText={handleChangeInputText}
          value={userInputText}
        />
        <Button
          title="+"
          color={COLORS.primary}
          onPress={handleFollowButton}
        />
      </View>
    );
};

export default AddUser;