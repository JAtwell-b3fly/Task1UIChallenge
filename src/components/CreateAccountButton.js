import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Button from './components/CreateAccountButton';

const CreateAccountButton = () => {
    return(
        <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>
    )
}

export default CreateAccountButton;